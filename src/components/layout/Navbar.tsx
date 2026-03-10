"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, type NavChild } from "@/data/navigation";
import { cn } from "@/lib/utils";

function DropdownMenu({ items }: { items: NavChild[] }) {
  return (
    <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-100 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-3 text-sm text-dark hover:bg-primary/10 hover:text-dark transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <nav className="mx-auto flex h-[100px] max-w-[1440px] items-center gap-[60px] px-[120px]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/imgKumatexLogo2.png"
            alt="KUMATEX"
            width={261}
            height={40}
            unoptimized
          />
        </Link>

        <ul className="flex items-center gap-[25px] font-[family-name:var(--font-inter)]">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  hasChildren ? setOpenDropdown(item.href) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-2.5 py-2.5 text-xl uppercase transition-colors",
                    item.highlight
                      ? "bg-primary text-dark rounded-3xl"
                      : isActive
                        ? "text-dark font-bold"
                        : "text-dark hover:text-dark/70"
                  )}
                >
                  {item.label}
                  {hasChildren && (
                    <span className="text-[10px] ml-0.5">▼</span>
                  )}
                </Link>

                {hasChildren && openDropdown === item.href && (
                  <DropdownMenu items={item.children!} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
