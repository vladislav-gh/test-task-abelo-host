import { ProductCard } from "@/components/products";
import { Text } from "@/components/ui";

import { PageLayout } from "../Layout";
import styles from "./styles.module.scss";

export function PageHome() {
    return (
        <PageLayout className={styles.page}>
            <Text as="h1" variant="title">
                Our latest products
            </Text>

            <div className={styles.products}>
                <ProductCard title="Product 1" category="Beauty" price="$10" canAddToCart />
                <ProductCard title="Product 2" category="Technology" price="$999" canAddToCart />
                <ProductCard title="Product 3" category="Beauty" price="$5" canAddToCart />
                <ProductCard title="Product 4" category="Science" price="$50.5" canAddToCart />
            </div>
        </PageLayout>
    );
}
