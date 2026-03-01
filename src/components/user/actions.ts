"use server";

import { fetchAuthMe } from "@/api";
import { authCookiesGet } from "@/components/auth";

export async function actionGetUser() {
    const authCookies = await authCookiesGet();

    if (!authCookies.accessToken) {
        return null;
    }

    try {
        const { data } = await fetchAuthMe();

        return data;
    } catch {
        return null;
    }
}
