import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import axios from "axios";

import { authCookiesGet, authCookiesSet } from "@/components/auth";
import { IS_SERVER } from "@/config";

import { API_URL } from "./config";
import { fetchAuthRefresh } from "./requests";

export const apiClient = axios.create({
    baseURL: API_URL,
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
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    });
}
