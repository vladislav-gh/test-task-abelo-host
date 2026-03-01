import { Button, Icon, Text } from "@/components/ui";
import { PAGES } from "@/config";

import { PageLayout } from "../Layout";

import styles from "./styles.module.scss";

export function Page404() {
    return (
        <PageLayout className={styles.page}>
            <Icon className={styles.icon} k="error404" />

            <Text as="h1" variant="subtitle">
                Oops! This Page is Not Found.
            </Text>

            <p className={styles.text}>The requested page dose not exist</p>

            <Button className={styles.button} href={PAGES.home}>
                Go Home
            </Button>
        </PageLayout>
    );
}
