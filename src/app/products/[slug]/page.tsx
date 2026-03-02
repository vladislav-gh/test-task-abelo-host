import { actionGetProductsCategories } from "@/components/products";

export async function generateStaticParams() {
    const productsCategories = await actionGetProductsCategories();

    return productsCategories.map(category => ({ slug: category.slug }));
}

export { PageHome as default } from "@/components/pages";
