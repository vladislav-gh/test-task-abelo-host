import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import { Lato } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserInitContainer } from "@/components/user";

import "@/styles";

const fontLato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    style: ["normal"],
});

export const dynamic = "force-static";

export const metadata: Metadata = {
    icons: {
        icon: [
            {
                url: "/favicon/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                url: "/favicon/favicon.svg",
                type: "image/svg+xml",
            },
        ],
        shortcut: "/favicon/favicon.ico",
        apple: {
            url: "/favicon/apple-touch-icon.png",
            sizes: "180x180",
        },
    },
    manifest: "/site.webmanifest",
    other: {
        "apple-mobile-web-app-title": "AH Shop",
    },
    title: {
        default: "AbeloHost Shop",
        template: "%s | AbeloHost Shop",
    },
    description: "Some description about the shop",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export const viewport: Viewport = {
    themeColor: "#222222",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html className={fontLato.variable} lang="en">
            <body>
                <UserInitContainer />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
