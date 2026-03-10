import Link from "next/link";

interface NumberedItemProps {
  number: number;
  title: string;
  href: string;
}

export function NumberedItem({ number, title, href }: NumberedItemProps) {
  return (
    <Link href={href} className="flex items-center gap-4 py-3 text-dark hover:text-primary transition-colors group">
      <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-primary">
        {String(number).padStart(2, "0")}.
      </span>
      <span className="text-lg group-hover:text-primary transition-colors">{title}</span>
    </Link>
  );
}
