import CategoryBreadcrumb from "@/components/category-breadcrumb";
import { products } from "@/lib/product";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((product) => product.id === params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full h-full space-y-6">
      <CategoryBreadcrumb
        parentCategory={product.category}
        subCategory={product.subcategory}
      />

      <div className="w-full grid grid-cols-2 text-white gap-6">
        <div className="col-span-2 md:col-span-1 md:p-4">
          <div className="aspect-square w-full bg-[#443E3E] rounded-3xl flex items-center justify-center">
            Product Image Here
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 md:p-4 space-y-4">
          <div className="text-[#F1F1F1] font-bold text-xl">{product.name}</div>
          <div className="text-[#B3B3B3] text-lg">
            Created by - {product.creatorName}
          </div>
          <div className="flex gap-1 text-xs">
            {Array.from({ length: product.rating }).map((_, index) => (
              <span key={`star-${index}`}>★</span>
            ))}
            {product.rating}
          </div>
          <hr className="border border-[#515151]" />
          <div className="font-bold text-[#F1F1F1] text-xl">
            $ {product.price}
          </div>
          <div className="flex gap-2">
            <button className="w-full bg-[#515151] rounded-full py-2">
              Add to Cart
            </button>
            <button className="w-full bg-[#CA323D] rounded-full py-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
