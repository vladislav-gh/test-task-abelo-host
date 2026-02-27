import type { ElProps } from "@/types";

import clsx from "clsx";

import styles from "./styles.module.scss";

export interface InputProps extends ElProps<"input"> {
    label?: string;
    error?: string;
}

export function Input({ className, type = "text", label, error, ...restProps }: InputProps) {
    return (
        <label className={clsx(styles.container, className)}>
            {label && <span className={styles.label}>{label}</span>}

            <input
                className={clsx(styles.input, {
                    [styles.input_error]: error,
                })}
                type={type}
                {...restProps}
            />

            {error && <span className={styles.error}>{error}</span>}
        </label>
    );
}
