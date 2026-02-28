import { FormSignIn } from "@/components/auth";
import { Text } from "@/components/ui";

import { PageLayout } from "../Layout";
import styles from "./styles.module.scss";

export function PageLogin() {
    return (
        <PageLayout className={styles.page}>
            <div className={styles.info}>
                <Text as="h1" variant="title">
                    Login
                </Text>

                <p className={styles.description}>Enter your credentials to access your account</p>
            </div>

            <FormSignIn className={styles.form} />
        </PageLayout>
    );
}
