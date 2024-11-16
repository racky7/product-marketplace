import ProductsSection from "@/components/products-section";
import { products } from "@/lib/product";

export default function ParentCategoryPage({
  params,
  searchParams,
}: {
  params: { categories: string[] };
  searchParams?: { q: string };
}) {
  const categories = params.categories;
  const parentCategory = categories[0].toLowerCase();
  const subCategory = categories[1]?.toLowerCase() ?? undefined;

  const searchKeyword = searchParams
    ? searchParams.q?.toLowerCase()
    : undefined;

  const filteredProducts = products.filter((product) => {
    return (
      (parentCategory === "all" || product.category === parentCategory) &&
      (subCategory ? product.subcategory === subCategory : true) &&
      product.name.toLowerCase().includes(searchKeyword || "")
    );
  });

  return (
    <>
      <div className="flex text-white text-base md:text-2xl font-bold capitalize">
        <div>{parentCategory}</div>
        {subCategory ? (
          <>
            <span>{" > "}</span>
            <div>{subCategory}</div>
          </>
        ) : null}
      </div>
      <ProductsSection
        products={filteredProducts}
        categoryName={parentCategory}
        searchKeyword={searchKeyword}
      />
    </>
  );
}
