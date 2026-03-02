import { Icon, Link } from "@/components/ui";
import { PAGES } from "@/config";

import { Categories } from "./categories";
import { Nav } from "./Nav";

import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo} href={PAGES.home}>
                    <Icon className={styles.logo__icon} k="logoAbeloHost" size="sm" />
                    AbeloHost Shop
                </Link>

                <Nav />
            </div>

            <Categories />
        </header>
    );
}
