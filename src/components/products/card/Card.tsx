import type { ElProps } from "@/types";

import Image from "next/image";
import clsx from "clsx";

import { Button, Icon, Text } from "@/components/ui";

import styles from "./styles.module.scss";

export interface ProductCardProps extends ElProps<"div"> {
    image?: string;
    title: string;
    category?: string;
    price: string | number;
    canAddToCart?: boolean;
}

export function ProductCard({
    className,
    image,
    title,
    category,
    price,
    canAddToCart,
    ...restProps
}: ProductCardProps) {
    return (
        <div className={clsx(styles.card, className)} {...restProps}>
            <div className={styles.image}>
                {image ? <Image src={image} alt={title} fill /> : <Icon className={styles.image__icon} k="image" />}
            </div>

            <div className={styles.body}>
                <Text className={styles.title} variant="category">
                    {title}
                </Text>

                {category && <div className={styles.category}>{category}</div>}
            </div>

            <footer className={styles.footer}>
                <Text className={styles.price} variant="category">
                    {price}
                </Text>

                {canAddToCart && (
                    <Button icon="cart" block>
                        Add to cart
                    </Button>
                )}
            </footer>
        </div>
    );
}
