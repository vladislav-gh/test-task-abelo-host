import { fetchProducts } from "@/api";

export async function getProducts() {
    try {
        const { data } = await fetchProducts({ limit: 12 });

        return data.products;
    } catch {
        return [];
    }
}
