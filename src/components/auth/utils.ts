"use server";

import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

import { cookies } from "next/headers";

import { COOKIES_KEY_ACCESS_TOKEN, COOKIES_KEY_REFRESH_TOKEN } from "./config";

export async function authCookiesSet(accessToken: string, refreshToken: string) {
    const cookiesStore = await cookies();
    const params: Partial<ResponseCookie> = { httpOnly: true, sameSite: "lax", path: "/" };

    cookiesStore.set(COOKIES_KEY_ACCESS_TOKEN, accessToken, params);
    cookiesStore.set(COOKIES_KEY_REFRESH_TOKEN, refreshToken, params);
}

export async function authCookiesGet() {
    const cookiesStore = await cookies();

    return {
        accessToken: cookiesStore.get(COOKIES_KEY_ACCESS_TOKEN)?.value,
        refreshToken: cookiesStore.get(COOKIES_KEY_REFRESH_TOKEN)?.value,
    };
}

export async function authCookiesRemove() {
    const cookiesStore = await cookies();

    cookiesStore.delete(COOKIES_KEY_ACCESS_TOKEN);
    cookiesStore.delete(COOKIES_KEY_REFRESH_TOKEN);
}
