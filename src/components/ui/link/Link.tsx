import type { LinkProps as NextLinkProps } from "next/link";
import type { ElProps } from "@/types";

import NextLink from "next/link";

export interface LinkProps extends Omit<ElProps<"a">, "href">, Partial<NextLinkProps> {
    simple?: boolean;
    email?: string;
}

export function Link({ href, simple, email, children, ...restProps }: LinkProps) {
    let to = href ?? "";
    let content = children;

    if (email) {
        to = `mailto:${email}`;
        content ??= email.replace(/\?.*$/, "");
    }

    if (simple || email) {
        return (
            <a href={String(to)} {...restProps}>
                {content}
            </a>
        );
    }

    return (
        <NextLink href={to} {...restProps}>
            {content}
        </NextLink>
    );
}
