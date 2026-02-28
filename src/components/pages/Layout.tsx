import type { ElProps } from "@/types";

import clsx from "clsx";

import styles from "./styles.module.scss";

export function PageLayout({ className, ...restProps }: ElProps<"main">) {
    return <main className={clsx(styles.layout, className)} {...restProps} />;
}
