import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import axios from "axios";
import axiosRetry from "axios-retry";

import { authCookiesGet, authCookiesRemove, authCookiesSet } from "@/components/auth";
import { IS_SERVER } from "@/config";

import { API_URL } from "./config";
import { fetchAuthRefresh } from "./requests";

export const apiClient = axios.create({
    baseURL: API_URL,
});

axiosRetry(apiClient, {
    retries: 2,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: error =>
        error.response?.status !== 401 &&
        (axiosRetry.isNetworkError(error) ||
            error.code === "ECONNABORTED" ||
            !!(error.response && error.response.status >= 500)),
});

if (IS_SERVER) {
    apiClient.interceptors.request.use(async config => {
        const authCookies = await authCookiesGet();

        if (authCookies.accessToken) {
            config.headers.set("Authorization", `Bearer ${authCookies.accessToken}`);
        }

        return config;
    });

    apiClient.interceptors.response.use(undefined, async (error: AxiosError) => {
        if (error.response?.status === 401) {
            const originalRequest: (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined = error.config;
            const authCookies = await authCookiesGet();

            if (originalRequest && !originalRequest._retry && authCookies.refreshToken) {
                originalRequest._retry = true;

                try {
                    const { data } = await fetchAuthRefresh({ refreshToken: authCookies.refreshToken });

                    await authCookiesSet(data.accessToken, data.refreshToken);

                    originalRequest.headers.set("Authorization", `Bearer ${data.accessToken}`);

                    return apiClient(originalRequest);
                } catch (error) {
                    authCookiesRemove();

                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    });
}
