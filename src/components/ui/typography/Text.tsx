import type { VariantProps } from "class-variance-authority";
import type { ElProps } from "@/types";

import { cva } from "class-variance-authority";
import clsx from "clsx";

import styles from "./styles.module.scss";

type VariantsProps = VariantProps<typeof variants>;

const variants = cva(styles.text, {
    variants: {
        variant: {
            title: styles.text_title,
            subtitle: styles.text_subtitle,
            category: styles.text_category,
            body: styles.text_body,
            caption: styles.text_caption,
        },
    },
    defaultVariants: {
        variant: "body",
    },
});

const variantsClassName = (props: VariantsProps) => variants(props);

export interface TextProps extends ElProps<"div">, VariantsProps {
    as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Text({ className, as = "div", ...restProps }: TextProps) {
    const Component = as;

    return <Component className={clsx(variantsClassName(restProps), className)} {...restProps}></Component>;
}
