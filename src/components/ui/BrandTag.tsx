import Link from "next/link";

interface BrandTagProps {
  name: string;
  slug: string;
}

export function BrandTag({ name, slug }: BrandTagProps) {
  return (
    <Link
      href={`/czesci-zamienne/${slug}`}
      className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-dark transition-colors hover:bg-primary hover:text-white"
    >
      {name}
    </Link>
  );
}
