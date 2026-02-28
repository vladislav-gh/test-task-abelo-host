import type { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export function PageLayout(props: PropsWithChildren) {
    return <main className={styles.layout} {...props} />;
}
