"use client";

import { useEffect, useRef, useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export default function SearchBar({ className }: { className?: string }) {
  const params = useParams();
  const categories = params.categories as string[];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get("q") || ""
  );
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: MouseEvent | any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchKeyword) {
      router.push(`/${categories.join("/")}?q=${searchKeyword}`);
    } else {
      router.push(`/${categories.join("/")}`);
    }
  };

  return (
    <>
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex-1 h-full rounded-[100px] gap-2.5 bg-[#2B2828]">
          <form
            className="w-full h-full flex items-center"
            onSubmit={handleSearchSubmit}
          >
            {!isSearchActive && !searchKeyword ? (
              <div
                className="w-1/2 h-full flex flex-col justify-center gap-0 px-8 py-2.5 cursor-text"
                onClick={() => {
                  setIsSearchActive(true);
                  setIsCategoryActive(false);
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
                value={searchKeyword}
                onChange={(e) => {
                  setSearchKeyword(e.target.value);
                }}
                autoFocus
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setIsSearchActive(false);
                  }
                }}
                className={cn(
                  "w-1/2 h-full text-white rounded-[100px] py-2.5 px-8 focus-within:outline-none",
                  isCategoryActive ? "bg-transparent" : "bg-[#443E3E]"
                )}
              />
            )}

            <div className="h-9 border border-[#515151]" />

            <div
              className={cn(
                "w-1/2 h-full bg-transparent flex items-center justify-between px-1 rounded-[100px]",
                isCategoryActive ? "bg-[#443E3E]" : null
              )}
              onClick={() => {
                setIsCategoryActive(!isCategoryActive);
              }}
            >
              <div className="h-full flex flex-col justify-center gap-0 px-8 py-2.5">
                <label className="text-xs font-bold text-[#B3B3B3]">
                  Category
                </label>
                <div className="w-full bg-transparent text-[#B3B3B3] text-base capitalize">
                  {categories[0]}
                </div>
              </div>
              <button
                type="submit"
                className="rounded-full  aspect-square p-2 bg-[#CA323D]"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSearchSubmit(e);
                }}
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>

        <button className="border border-[#F1F1F1] rounded-full p-2 h-10 w-10 hidden md:block">
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </button>
      </div>
      {isCategoryActive ? (
        <div
          ref={dropdownRef}
          className="absolute bg-[#443E3E] w-[444px] min-h-[352px] top-20 left-1/3 rounded-[32px] shadow-lg p-4 grid grid-cols-2"
        >
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      ) : null}
    </>
  );
}
