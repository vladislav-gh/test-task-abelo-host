"use client";

import { useEffect, useEffectEvent } from "react";

import { signOut } from "@/components/auth";

import { getUser } from "./actions";
import { useUserState } from "./store";
import { mapUser } from "./utils";

export function UserInitContainer() {
    const { setUser, setIsInitialized } = useUserState(["setUser", "setIsInitialized"]);

    const setUserOnLoad = useEffectEvent(() => {
        getUser().then(user => {
            if (user) {
                setUser(mapUser(user));
            } else {
                setUser(null);
                signOut();
            }

            setIsInitialized(true);
        });
    });

    useEffect(() => {
        setUserOnLoad();
    }, []);

    return null;
}
