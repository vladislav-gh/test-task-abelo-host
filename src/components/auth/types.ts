export interface ActionSignInState {
    success?: boolean;
    error?: {
        message?: string;
        fields?: Record<string, string | undefined>;
    };
    payload?: FormData;
}
