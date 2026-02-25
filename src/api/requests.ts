import { apiClient } from "./client";
import { ENDPOINTS } from "./config";
import {
    AuthLoginDTO,
    AuthLoginResponse,
    AuthMeResponse,
    AuthRefreshDTO,
    AuthRefreshResponse,
    ProductsResponse,
} from "./types";

export const fetchAuthLogin = (params: AuthLoginDTO): Promise<AuthLoginResponse> =>
    apiClient.post(ENDPOINTS.auth.login, params);

export const fetchAuthMe = (): Promise<AuthMeResponse> => apiClient.get(ENDPOINTS.auth.me);

export const fetchAuthRefresh = (params: AuthRefreshDTO): Promise<AuthRefreshResponse> =>
    apiClient.post(ENDPOINTS.auth.refresh, params);

export const fetchProducts = (): Promise<ProductsResponse> => apiClient.get(ENDPOINTS.products);
