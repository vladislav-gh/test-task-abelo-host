import { fetchProducts, fetchProductsCategories, fetchProductsInCategory } from "@/api";

import { PRODUCTS_CATEGORIES_MAX_COUNT, PRODUCTS_PER_PAGE } from "./config";

export async function actionGetProducts(categorySlug?: string) {
    try {
        const params = { limit: PRODUCTS_PER_PAGE };
        const { data } = categorySlug
            ? await fetchProductsInCategory(categorySlug, params)
            : await fetchProducts(params);

        return data.products;
    } catch {
        return [];
    }
}

export async function actionGetProductsCategories() {
    try {
        const { data } = await fetchProductsCategories();

        return data.slice(0, PRODUCTS_CATEGORIES_MAX_COUNT);
    } catch {
        return [];
    }
}
