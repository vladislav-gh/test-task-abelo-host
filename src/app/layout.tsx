import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "@/styles";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
    title: "AbeloHost Shop",
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
        </html>
    );
}
