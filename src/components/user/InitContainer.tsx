"use client";

import { useEffect, useEffectEvent } from "react";

import { actionSignOut } from "@/components/auth";

import { actionGetUser } from "./actions";
import { useUserState } from "./store";
import { mapUser } from "./utils";

export function UserInitContainer() {
    const { user, setUser, setIsInitialized } = useUserState(["user", "setUser", "setIsInitialized"]);

    const setUserOnLoad = useEffectEvent(() => {
        actionGetUser().then(userData => {
            if (userData) {
                setUser(mapUser(userData));
            } else if (user) {
                setUser(null);
                actionSignOut();
            }

            setIsInitialized(true);
        });
    });

    useEffect(() => {
        setUserOnLoad();
    }, []);

    return null;
}
