import type { VariantProps } from "class-variance-authority";
import type { IconProps, LinkProps } from "@/components/ui";
import type { ElProps } from "@/types";

import { cva } from "class-variance-authority";
import clsx from "clsx";

import { Icon, Link, Spinner } from "@/components/ui";

import styles from "./styles.module.scss";

type VariantsProps = VariantProps<typeof variants>;

const variants = cva(styles.button, {
    variants: {
        variant: {
            primary: styles.button_primary,
            secondary: styles.button_secondary,
        },
        block: {
            true: styles.button_block,
        },
        loading: {
            true: styles.button_loading,
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

const variantsClassName = (props: VariantsProps) => variants(props);

export interface ButtonProps extends ElProps<"button">, VariantsProps, Pick<LinkProps, "href"> {
    linkProps?: Omit<LinkProps, "ref" | "className" | "href">;
    icon?: IconProps["k"];
}

export function Button({
    ref,
    className,
    type = "button",
    href,
    loading,
    linkProps,
    icon,
    children,
    ...restProps
}: ButtonProps) {
    let content = children;

    if (loading) {
        content = <Spinner />;
    } else if (icon) {
        content = (
            <>
                {children} <Icon k={icon} size="sm" />
            </>
        );
    }

    const commonProps = {
        className: clsx(variantsClassName({ loading, ...restProps }), className),
    };

    if (href) {
        return (
            <Link ref={ref as LinkProps["ref"]} href={href} {...commonProps} {...linkProps}>
                {content}
            </Link>
        );
    }

    return (
        <button ref={ref} type={type} {...commonProps} {...restProps}>
            {content}
        </button>
    );
}
