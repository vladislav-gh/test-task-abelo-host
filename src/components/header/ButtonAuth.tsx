"use client";

import { Button } from "@/components/ui";
import { PAGES } from "@/config";

export function ButtonAuth() {
    const user = false; // TODO: get real user

    const handleClick = () => {
        if (user) {
            // TODO: logout
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
