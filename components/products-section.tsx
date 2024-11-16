"use client";

import ProductCard from "@/components/product-card";
import { Product } from "@/lib/product";

export default function ProductsSection({
  products,
  categoryName,
  searchKeyword,
}: {
  products: Product[];
  categoryName: string;
  searchKeyword: string | undefined;
}) {
  console.log(categoryName, searchKeyword);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} className="col-span-1" product={product} />
      ))}
    </div>
  );
}
