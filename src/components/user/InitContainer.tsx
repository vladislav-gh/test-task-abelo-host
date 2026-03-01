"use client";

import { useEffect, useEffectEvent } from "react";

import { actionSignOut } from "@/components/auth";

import { actionGetUser } from "./actions";
import { useUserState } from "./store";
import { mapUser } from "./utils";

export function UserInitContainer() {
    const { setUser, setIsInitialized } = useUserState(["setUser", "setIsInitialized"]);

    const setUserOnLoad = useEffectEvent(() => {
        actionGetUser().then(user => {
            if (user) {
                setUser(mapUser(user));
            } else {
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
