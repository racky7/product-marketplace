import ProductCard from "@/components/product-card";

export default function Home() {
  return (
    <div className="w-full bg-[#110606] flex-1 px-4 py-4 md:px-10 lg:px-20">
      <div className="w-full h-full space-y-6">
        <div className="flex text-white text-base md:text-2xl font-bold">
          <div>Parent Category</div>
          <span>{" > "}</span>
          <div>Child Category</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {Array.from({ length: 18 }).map((_, index) => (
            <ProductCard key={index} className="col-span-1" />
          ))}
        </div>
      </div>
      <div className="w-full h-8"></div>
    </div>
  );
}
