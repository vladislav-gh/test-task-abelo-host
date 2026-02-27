import type { VariantProps } from "class-variance-authority";
import type { ElProps } from "@/types";
import type { IconKeys } from "./collection";

import { cva } from "class-variance-authority";
import clsx from "clsx";

import { IconsCollection } from "./collection";
import styles from "./styles.module.scss";

type VariantsProps = VariantProps<typeof variants>;

const variants = cva(styles.icon, {
    variants: {
        size: {
            xs: styles["icon_size-xs"],
            sm: styles["icon_size-sm"],
            md: styles["icon_size-md"],
            lg: styles["icon_size-lg"],
            xl: styles["icon_size-xl"],
        },
    },
    defaultVariants: {
        size: "md",
    },
});

const variantsClassName = (props: VariantsProps) => variants(props);

export interface IconProps extends ElProps<"svg">, VariantsProps {
    k: IconKeys;
}

export function Icon({ className, k, ...restProps }: IconProps) {
    const Component = IconsCollection[k];

    if (!Component) {
        return;
    }

    return <Component className={clsx(variantsClassName(restProps), className)} {...restProps} />;
}
