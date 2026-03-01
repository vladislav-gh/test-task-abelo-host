"use client";

import type { ElProps } from "@/types";
import type { ActionSignInState } from "../types";

import { useActionState, useEffect, useEffectEvent } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { Button, Input, Text } from "@/components/ui";
import { mapUser, useUserState } from "@/components/user";
import { PAGES } from "@/config";

import { signIn } from "../actions";
import { SIGN_IN_FIELDS } from "../config";
import styles from "./styles.module.scss";

export type FormSignInProps = ElProps<"form">;

export function FormSignIn({ className, ...restProps }: FormSignInProps) {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState<ActionSignInState, FormData>(signIn, {});
    const { setUser } = useUserState(["setUser"]);

    const handleLoginSuccess = useEffectEvent(() => {
        if (state.success && state.data) {
            setUser(mapUser(state.data));

            router.push(PAGES.home);
        }
    });

    useEffect(() => {
        handleLoginSuccess();
    }, [state]);

    return (
        <form className={clsx(styles.form, className)} action={formAction} {...restProps}>
            <div className={styles.fields}>
                <Input
                    name={SIGN_IN_FIELDS.username.name}
                    label="Username*"
                    placeholder="Enter your name"
                    minLength={SIGN_IN_FIELDS.username.minLength}
                    required
                    disabled={isPending}
                    defaultValue={state.payload?.get(SIGN_IN_FIELDS.username.name)?.toString()}
                    error={state.error?.fields?.[SIGN_IN_FIELDS.username.name]}
                />

                <Input
                    type="password"
                    name={SIGN_IN_FIELDS.password.name}
                    label="Password*"
                    placeholder="Enter your password"
                    minLength={SIGN_IN_FIELDS.password.minLength}
                    required
                    disabled={isPending}
                    defaultValue={state.payload?.get(SIGN_IN_FIELDS.password.name)?.toString()}
                    error={state.error?.fields?.[SIGN_IN_FIELDS.password.name]}
                />
            </div>

            <Button type="submit" block disabled={isPending} loading={isPending}>
                Login
            </Button>

            {state.error?.message && (
                <Text className={styles.error} variant="caption">
                    {state.error.message}
                </Text>
            )}
        </form>
    );
}
