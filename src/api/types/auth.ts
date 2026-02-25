import { User } from "./users";

export interface AuthLoginDTO {
    username: string;
    password: string;
    expiresInMins?: number;
}

export interface AuthLoginResponse extends User {
    accessToken: string;
    refreshToken: string;
}

export type AuthMeResponse = User;

export interface AuthRefreshDTO {
    refreshToken?: string;
    expiresInMins?: number;
}

export interface AuthRefreshResponse {
    accessToken: string;
    refreshToken: string;
}
