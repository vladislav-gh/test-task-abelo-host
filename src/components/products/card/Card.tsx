"use client";

import type { ElProps } from "@/types";

import Image from "next/image";
import clsx from "clsx";

import { Button, Icon, Text } from "@/components/ui";
import { useUserState } from "@/components/user";

import styles from "./styles.module.scss";

export interface ProductCardProps extends ElProps<"div"> {
    image?: string;
    title: string;
    caption?: string;
    price: number;
}

export function ProductCard({ className, image, title, caption, price, ...restProps }: ProductCardProps) {
    const { user } = useUserState(["user"]);

    return (
        <div className={clsx(styles.card, className)} {...restProps}>
            <div className={styles.image}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(min-width: 1025px) 18rem, (min-width: 768px) 35vw, (min-width: 360px) 50vw, 100vw"
                    />
                ) : (
                    <Icon className={styles.image__icon} k="image" />
                )}
            </div>

            <div className={styles.body}>
                <Text className={styles.title} variant="category">
                    {title}
                </Text>

                {caption && <div className={styles.caption}>{caption}</div>}
            </div>

            <footer className={styles.footer}>
                <Text className={styles.price} variant="category">
                    {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </Text>

                {user && (
                    <Button icon="cart" block>
                        Add to cart
                    </Button>
                )}
            </footer>
        </div>
    );
}
