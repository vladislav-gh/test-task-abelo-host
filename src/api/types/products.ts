export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
    images: string[];
}

export interface ProductsResponse {
    products: Product[];
}
