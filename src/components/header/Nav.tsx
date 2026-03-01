"use client";

import { useUserState } from "@/components/user";

import { ButtonAuth } from "./ButtonAuth";

import styles from "./styles.module.scss";

export function Nav() {
    const { user, isInitialized } = useUserState(["user", "isInitialized"]);

    if (!isInitialized) {
        return;
    }

    return (
        <div className={styles.nav}>
            {user && <div className={styles.user}>Name Surname</div>}

            <ButtonAuth />
        </div>
    );
}
