export interface Product {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    thumbnail: string;
}

export interface ProductsCategory {
    slug: string;
    name: string;
    url: string;
}

export interface ProductsDTO {
    limit?: number;
}

export interface ProductsResponse {
    products: Product[];
}

export type ProductsCategoriesResponse = ProductsCategory[];
