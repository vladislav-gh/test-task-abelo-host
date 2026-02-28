import type { ElProps } from "@/types";

import clsx from "clsx";

import { Button, Input, Text } from "@/components/ui";

import styles from "./styles.module.scss";

export type FormSignInProps = ElProps<"form">;

export function FormSignIn({ className, ...restProps }: FormSignInProps) {
    return (
        <form className={clsx(styles.form, className)} {...restProps}>
            <div className={styles.fields}>
                <Input name="username" label="Username*" placeholder="Enter your name" minLength={3} required />

                <Input
                    type="password"
                    name="password"
                    label="Password*"
                    placeholder="Enter your password"
                    minLength={3}
                    required
                />
            </div>

            <Button type="submit" block>
                Login
            </Button>

            <Text className={styles.error} variant="caption">
                Error message
            </Text>
        </form>
    );
}
