import Header from "@/components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-full flex flex-col">
      <Header />
      {children}
    </div>
  );
}
