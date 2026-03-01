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

export const fetchAuthLogin = (data: AuthLoginDTO) => apiClient.post<AuthLoginResponse>(ENDPOINTS.auth.login, data);

export const fetchAuthMe = () => apiClient.get<AuthMeResponse>(ENDPOINTS.auth.me);

export const fetchAuthRefresh = (data?: AuthRefreshDTO) =>
    apiClient.post<AuthRefreshResponse>(ENDPOINTS.auth.refresh, data);

export const fetchProducts = () => apiClient.get<ProductsResponse>(ENDPOINTS.products);
