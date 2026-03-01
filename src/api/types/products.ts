export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
}

export interface ProductsDTO {
    limit?: number;
}

export interface ProductsResponse {
    products: Product[];
}
