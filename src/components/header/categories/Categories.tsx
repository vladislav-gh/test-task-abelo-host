import { actionGetProductsCategories } from "@/components/products";

import { Item } from "./Item";

import styles from "./styles.module.scss";

export async function Categories() {
    const productsCategories = await actionGetProductsCategories();

    if (!productsCategories.length) {
        return null;
    }

    return (
        <div className={styles.categories}>
            <div className={styles.container}>
                {productsCategories.map(category => (
                    <Item key={category.slug} categorySlug={category.slug}>
                        {category.name}
                    </Item>
                ))}
            </div>
        </div>
    );
}
