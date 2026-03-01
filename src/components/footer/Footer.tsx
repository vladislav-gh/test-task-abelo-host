import styles from "./styles.module.scss";
import { User } from "./User";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.year}>
                    © {new Date().getFullYear()} <b>AbeloHost Shop</b>
                </div>

                <User />
            </div>
        </footer>
    );
}
