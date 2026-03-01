import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    sassOptions: {
        additionalData: '@use "@/styles/index" as *;',
    },
    images: {
        remotePatterns: [{ protocol: "https", hostname: "**.dummyjson.com" }],
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule: { test: { test: (arg0: string) => unknown } }) =>
            rule.test?.test?.(".svg")
        );

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "preset-default",
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            }
        );

        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default nextConfig;
