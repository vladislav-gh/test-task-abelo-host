import { Icon, Link } from "@/components/ui";
import { PAGES } from "@/config";

import { ButtonAuth } from "./ButtonAuth";
import styles from "./styles.module.scss";

export function Header() {
    const user = false; // TODO: get real user

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo} href={PAGES.home}>
                    <Icon className={styles.logo__icon} k="logoAbeloHost" size="sm" />
                    AbeloHost Shop
                </Link>

                <div className={styles.nav}>
                    {user && <div className={styles.user}>Name Surname</div>}

                    <ButtonAuth />
                </div>
            </div>
        </header>
    );
}
