export const PAGES = {
    home: "/",
    login: "/login",
    productsInCategory: (slug: string) => `/products/${slug}`,
} as const;
