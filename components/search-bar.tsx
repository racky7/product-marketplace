import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function SearchBar({ className }: { className?: string }) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex-1 h-full rounded-[100px] gap-2.5 bg-[#2B2828]">
        <div className="w-full h-full flex items-center">
          {!isSearchActive ? (
            <div
              className="w-full h-full flex flex-col justify-center gap-0 px-8 py-2.5 cursor-text"
              onClick={() => {
                setIsSearchActive(true);
              }}
            >
              <label className="text-xs font-bold text-[#B3B3B3]">
                Keyword
              </label>
              <div className="w-full bg-transparent text-[#B3B3B3] text-base">
                Search Product
              </div>
            </div>
          ) : (
            <input
              type="text"
              autoFocus
              onBlur={(e) => {
                if (e.target.value === "") {
                  setIsSearchActive(false);
                }
              }}
              className="w-full h-full bg-[#443E3E]  text-white rounded-[100px] py-2.5 px-8 focus-within:outline-none"
            />
          )}

          <div className="h-9 border border-[#515151]" />

          <div className="w-full h-full bg-transparent flex items-center justify-between px-1">
            <div className="h-full flex flex-col justify-center gap-0 px-8 py-2.5">
              <label className="text-xs font-bold text-[#B3B3B3]">
                Category
              </label>
              <div className="w-full bg-transparent text-[#B3B3B3] text-base">
                All
              </div>
            </div>
            <button className="rounded-full  aspect-square p-2 bg-[#CA323D]">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <button className="border border-[#F1F1F1] rounded-full p-2 h-10 w-10 hidden md:block">
        <AdjustmentsHorizontalIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
