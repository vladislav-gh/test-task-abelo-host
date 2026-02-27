import type { ElProps } from "@/types";

import clsx from "clsx";

import { Text } from "@/components/ui";

import styles from "./styles.module.scss";

export interface InputProps extends ElProps<"input"> {
    label?: string;
    error?: string;
}

export function Input({ className, type = "text", label, error, ...restProps }: InputProps) {
    return (
        <label className={clsx(styles.container, className)}>
            {label && (
                <Text className={styles.label} as="span" variant="caption">
                    {label}
                </Text>
            )}

            <input
                className={clsx(styles.input, {
                    [styles.input_error]: error,
                })}
                type={type}
                {...restProps}
            />

            {error && (
                <Text className={styles.error} as="span" variant="caption">
                    {error}
                </Text>
            )}
        </label>
    );
}
