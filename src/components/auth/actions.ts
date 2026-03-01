"use server";

import type { ActionSignInState } from "./types";

import { revalidatePath } from "next/cache";
import { isAxiosError } from "axios";
import * as z from "zod";

import { fetchAuthLogin } from "@/api";

import { SIGN_IN_FIELDS } from "./config";
import { authCookiesRemove, authCookiesSet } from "./utils";

const signInSchema = z.object({
    username: z
        .string()
        .trim()
        .nonempty("Username is required")
        .min(
            SIGN_IN_FIELDS.username.minLength,
            `Username must be at least ${SIGN_IN_FIELDS.username.minLength} characters`
        ),
    password: z
        .string()
        .trim()
        .nonempty("Password is required")
        .min(
            SIGN_IN_FIELDS.password.minLength,
            `Password must be at least ${SIGN_IN_FIELDS.password.minLength} characters`
        ),
});

export async function actionSignIn(_prevState: ActionSignInState, formData: FormData): Promise<ActionSignInState> {
    const validatedFields = signInSchema.safeParse({
        username: formData.get(SIGN_IN_FIELDS.username.name),
        password: formData.get(SIGN_IN_FIELDS.password.name),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            error: {
                fields: Object.entries(z.treeifyError(validatedFields.error).properties ?? {}).reduce(
                    (acc, [key, value]) => ({
                        ...acc,
                        [key]: value.errors[0],
                    }),
                    {}
                ),
            },
            payload: formData,
        };
    }

    try {
        const { data } = await fetchAuthLogin(validatedFields.data);

        await authCookiesSet(data.accessToken, data.refreshToken);

        revalidatePath("/");

        return { success: true, data };
    } catch (error) {
        let message = "Something went wrong. Please try again later.";

        if (isAxiosError(error)) {
            message = error.response?.data.message ?? message;
        } else if (error instanceof Error) {
            message = error.message;
        }

        return {
            success: false,
            error: {
                message,
            },
            payload: formData,
        };
    }
}

export async function actionSignOut() {
    await authCookiesRemove();

    revalidatePath("/");
}
