import Link from "next/link";

export default function CategoryBreadcrumb({
  parentCategory,
  subCategory,
}: {
  parentCategory: string;
  subCategory?: string;
}) {
  return (
    <div className="flex space-x-2 text-white text-base md:text-2xl font-bold capitalize">
      <Link href={`/${parentCategory}`}>
        <div>{parentCategory}</div>
      </Link>
      {subCategory ? (
        <>
          <span>{" > "}</span>
          <Link href={`/${parentCategory}/${subCategory}`}>
            <div>{subCategory}</div>
          </Link>
        </>
      ) : null}
    </div>
  );
}
