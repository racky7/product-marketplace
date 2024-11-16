import Image from "next/image";

export default function Header() {
  return (
    <div className="h-20 py-4 px-20 flex items-center space-x-24 bg-black text-white">
      <div>
        <Image src="/test_logo.svg" alt="Test Logo" width={170} height={32} />
      </div>
      <div className="flex-1">Search Bar</div>
      <div>Top Right Section</div>
    </div>
  );
}
