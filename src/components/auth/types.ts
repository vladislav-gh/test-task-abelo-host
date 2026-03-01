import type { AuthLoginResponse } from "@/api";

export interface ActionSignInState {
    success?: boolean;
    error?: {
        message?: string;
        fields?: Record<string, string | undefined>;
    };
    payload?: FormData;
    data?: AuthLoginResponse;
}
