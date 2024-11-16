import Header from "@/components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full flex flex-col">
      <Header />
      <div className="w-full bg-[#110606] flex-1 px-4 py-4 md:px-10 lg:px-20">
        {children}
      </div>
    </div>
  );
}
