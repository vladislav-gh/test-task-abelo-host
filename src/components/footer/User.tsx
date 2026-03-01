"use client";

import { Link } from "@/components/ui";
import { useUserState } from "@/components/user";

import styles from "./styles.module.scss";

export function User() {
    const { user } = useUserState(["user"]);

    if (!user?.email) {
        return null;
    }

    return (
        <div className={styles.user}>
            Logged as <Link email={user.email} />
        </div>
    );
}
