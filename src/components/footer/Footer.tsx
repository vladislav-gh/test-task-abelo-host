import { Link } from "@/components/ui";

import styles from "./styles.module.scss";

export function Footer() {
    const user = false; // TODO: get real user

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.year}>
                    © {new Date().getFullYear()} <b>AbeloHost Shop</b>
                </div>

                {user && (
                    <div className={styles.user}>
                        Logged as <Link email="user@mail.com" />
                    </div>
                )}
            </div>
        </footer>
    );
}
