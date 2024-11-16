import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import SearchBar from "./search-bar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 h-20 px-4 py-4 md:px-10 lg:px-20 flex items-center gap-4 md:gap-10 lg:gap-[100px] bg-[#110606] text-white">
      <Link href={"/all"} className="hidden lg:block">
        <Image
          src="/test_logo.svg"
          alt="Test Logo"
          width={170}
          height={32}
          priority
        />
      </Link>

      <SearchBar className="flex-1 h-full" />

      <div className="flex items-center md:gap-6 h-full rounded-full">
        <div className="text-sm hidden md:block">List your creation</div>
        <div className="h-auto">
          <GlobeAltIcon className="h-5 w-5 hidden md:block" />
        </div>
        <button className="h-full flex items-center border border-[#F1F1F1] rounded-full p-2 md:space-x-2.5 aspect-square md:aspect-auto">
          <div className="w-full flex items-center justify-center">
            <Bars3Icon className="h-5 w-5" />
          </div>
          <div className="w-full hidden md:flex items-center justify-center">
            <UserCircleIcon className="h-8 w-8" />
          </div>
        </button>
        <button className="border border-[#F1F1F1] rounded-full h-full p-3 hidden md:block">
          <ShoppingCartIcon className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
