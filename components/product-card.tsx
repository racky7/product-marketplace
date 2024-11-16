import { Product } from "@/lib/product";
import { cn } from "@/lib/utils";

export default function ProductCard({
  className,
  product,
}: {
  className?: string;
  product: Product;
}) {
  return (
    <div className={cn("w-full space-y-2 text-white", className)}>
      <div className="w-full bg-[#443E3E] rounded-xl aspect-square flex items-center justify-center">
        <div>
          <div>{product.category}</div>
          {product.subcategory && <div>{`> ${product.subcategory}`}</div>}
        </div>
      </div>
      <div className="text-sm">
        <div className="text-[#F1F1F1] font-bold">{product.name}</div>
        <div className="text-[#B3B3B3]">{product.creatorName}</div>
        <div></div>
        <div className="font-bold text-[#F1F1F1]">$ {product.price}</div>
      </div>
    </div>
  );
}
