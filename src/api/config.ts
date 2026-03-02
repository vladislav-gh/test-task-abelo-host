export const API_URL = "https://dummyjson.com";

export const ENDPOINTS = {
    auth: {
        login: "/auth/login",
        me: "/auth/me",
        refresh: "/auth/refresh",
    },
    products: {
        list: "/products",
        categories: "/products/categories",
        inCategory: (slug: string) => `/products/category/${slug}`,
    },
};
