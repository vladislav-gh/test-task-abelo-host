import { actionGetProducts, ProductCard } from "@/components/products";
import { Text } from "@/components/ui";

import { PageLayout } from "../Layout";

import styles from "./styles.module.scss";

export async function PageHome() {
    const products = await actionGetProducts();

    return (
        <PageLayout className={styles.page}>
            <Text as="h1" variant="title">
                Our latest products
            </Text>

            <div className={styles.products}>
                {products.length ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            category={product.category}
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
