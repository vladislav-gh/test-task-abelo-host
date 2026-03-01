"use server";

import { fetchAuthMe } from "@/api";

export async function actionGetUser() {
    try {
        const { data } = await fetchAuthMe();

        return data;
    } catch {
        return null;
    }
}
