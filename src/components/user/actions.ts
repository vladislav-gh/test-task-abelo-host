"use server";

import { fetchAuthMe } from "@/api";

export async function getUser() {
    try {
        const { data } = await fetchAuthMe();

        return data;
    } catch {
        return null;
    }
}
