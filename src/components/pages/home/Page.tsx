import { notFound } from "next/navigation";

import { actionGetProducts, actionGetProductsCategories, ProductCard } from "@/components/products";
import { Text } from "@/components/ui";

import { PageLayout } from "../Layout";

import styles from "./styles.module.scss";

export interface PageHomeProps {
    params: Promise<{ slug?: string }>;
}

export async function PageHome({ params }: PageHomeProps) {
    const { slug } = await params;

    let category;

    if (slug) {
        const productsCategories = await actionGetProductsCategories();

        category = productsCategories.find(category => category.slug === slug);

        if (!category) {
            notFound();
        }
    }

    const products = await actionGetProducts(slug);

    return (
        <PageLayout className={styles.page}>
            <Text as="h1" variant="title">
                {category?.name ?? "Our latest products"}
            </Text>

            <div className={styles.products}>
                {products.length ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            caption={product.brand}
                            price={product.price}
                            image={product.thumbnail}
                        />
                    ))
                ) : (
                    <Text className={styles.productsEmpty} variant="category">
                        Products not found
                    </Text>
                )}
            </div>
        </PageLayout>
    );
}
