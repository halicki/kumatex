import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  href: string;
  icon: string;
  highlighted?: boolean;
}

export function ServiceCard({ title, href, icon, highlighted }: ServiceCardProps) {
  return (
    <Link href={href} className="group flex flex-col items-start pb-4">
      <div className={`flex items-center p-2.5 ${highlighted ? "bg-primary" : ""}`}>
        <Image src={icon} alt="" width={64} height={64} unoptimized />
      </div>
      <h3 className={`mt-4 min-h-[80px] font-[family-name:var(--font-inter)] text-xl font-medium ${highlighted ? "text-white" : "text-dark"}`}>
        {title}
      </h3>
      <p className="mt-auto text-base text-dark group-hover:text-primary transition-colors">
        Zobacz szczegóły
      </p>
      <div className="mt-1 h-0.5 w-16 bg-dark group-hover:bg-primary transition-colors" />
    </Link>
  );
}
