"use client";

import { Link } from "@/components/ui";
import { useUserState } from "@/components/user";

import styles from "./styles.module.scss";

export function User() {
    const { user } = useUserState(["user"]);

    if (!user) {
        return null;
    }

    <div className={styles.user}>
        Logged as <Link email="user@mail.com" />
    </div>;
}
