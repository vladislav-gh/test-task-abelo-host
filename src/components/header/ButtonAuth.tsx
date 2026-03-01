"use client";

import { logout } from "@/components/auth";
import { Button } from "@/components/ui";
import { useUserState } from "@/components/user";
import { PAGES } from "@/config";

export function ButtonAuth() {
    const { user } = useUserState(["user"]);

    const handleClick = async () => {
        if (user) {
            logout();
        }
    };

    return (
        <Button
            href={user ? undefined : PAGES.login}
            icon={user ? "signOut" : "signIn"}
            onClick={user ? handleClick : undefined}
        >
            {user ? "Logout" : "Login"}
        </Button>
    );
}
