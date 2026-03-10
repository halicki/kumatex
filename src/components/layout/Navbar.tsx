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

function MobileSubmenu({ items, onNavigate }: { items: NavChild[]; onNavigate: () => void }) {
  return (
    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/30 pl-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="block py-2 text-base text-dark hover:text-primary transition-colors"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <nav className="mx-auto flex h-16 lg:h-[100px] max-w-[1440px] items-center justify-between px-4 lg:px-[120px]">
        <Link href="/" className="shrink-0" onClick={closeMobile}>
          <Image
            src="/images/imgKumatexLogo2.png"
            alt="KUMATEX"
            width={261}
            height={40}
            className="w-[160px] lg:w-[261px] h-auto"
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-[25px] font-[family-name:var(--font-inter)]">
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

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileSubmenu(null); }}
          aria-label="Menu"
        >
          <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <ul className="px-4 py-6 space-y-1 font-[family-name:var(--font-inter)]">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        "flex-1 py-3 text-lg uppercase transition-colors",
                        item.highlight
                          ? "text-primary font-bold"
                          : isActive
                            ? "text-dark font-bold"
                            : "text-dark"
                      )}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === item.href ? null : item.href)}
                        className="p-3 text-primary text-lg"
                      >
                        {mobileSubmenu === item.href ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  {hasChildren && mobileSubmenu === item.href && (
                    <MobileSubmenu items={item.children!} onNavigate={closeMobile} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
