import { cn } from "@/lib/utils";

export default function ProductCard({ className }: { className?: string }) {
  return (
    <div className={cn("w-full space-y-2 text-white", className)}>
      <div className="w-full bg-[#443E3E] rounded-xl aspect-square"></div>
      <div className="text-sm">
        <div className="text-[#F1F1F1] font-bold">Product name</div>
        <div className="text-[#B3B3B3]">Creator name</div>
        <div></div>
        <div className="font-bold text-[#F1F1F1]">$ 10.50</div>
      </div>
    </div>
  );
}
