import { apiClient } from "./client";
import { ENDPOINTS } from "./config";
import {
    AuthLoginDTO,
    AuthLoginResponse,
    AuthMeResponse,
    AuthRefreshDTO,
    AuthRefreshResponse,
    ProductsCategoriesResponse,
    ProductsDTO,
    ProductsResponse,
} from "./types";

export const fetchAuthLogin = (data: AuthLoginDTO) => apiClient.post<AuthLoginResponse>(ENDPOINTS.auth.login, data);

export const fetchAuthMe = () => apiClient.get<AuthMeResponse>(ENDPOINTS.auth.me);

export const fetchAuthRefresh = (data?: AuthRefreshDTO) =>
    apiClient.post<AuthRefreshResponse>(ENDPOINTS.auth.refresh, data);

export const fetchProducts = (params?: ProductsDTO) =>
    apiClient.get<ProductsResponse>(ENDPOINTS.products.list, { params });

export const fetchProductsCategories = () => apiClient.get<ProductsCategoriesResponse>(ENDPOINTS.products.categories);

export const fetchProductsInCategory = (slug: string, params?: ProductsDTO) =>
    apiClient.get<ProductsResponse>(ENDPOINTS.products.inCategory(slug), { params });
