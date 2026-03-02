"use client";

import type { LinkProps } from "@/components/ui";

import { useParams } from "next/navigation";
import clsx from "clsx";

import { Link } from "@/components/ui";
import { PAGES } from "@/config";

import styles from "./styles.module.scss";

export interface ItemProps extends LinkProps {
    categorySlug: string;
}

export function Item({ className, categorySlug, ...restProps }: ItemProps) {
    const params: { slug?: string } = useParams();

    return (
        <Link
            className={clsx(
                styles.link,
                {
                    [styles.link_active]: categorySlug === params.slug,
                },
                className
            )}
            href={PAGES.productsInCategory(categorySlug)}
            {...restProps}
        />
    );
}
