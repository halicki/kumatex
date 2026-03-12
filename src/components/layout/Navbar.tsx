"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { seoNavigation, type MegaMenuSection } from "@/data/seo-navigation";
import { cn } from "@/lib/utils";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
}

function MegaMenuPanel({
  section,
  onMouseEnter,
  onMouseLeave,
}: {
  section: MegaMenuSection;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!section.children || section.children.length === 0) return null;

  return (
    <div
      className="bg-white rounded-b-lg shadow-xl mx-auto max-w-4xl w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="px-10 py-8">
        <div className="mb-4">
          <Link
            href={section.href}
            className="font-[family-name:var(--font-inter)] text-lg font-bold text-dark hover:text-primary transition-colors"
          >
            {section.label}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
          {section.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block py-2 text-sm text-dark hover:text-primary transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  useEffect(() => {
    closeMobile();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = openDropdown ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openDropdown]);

  const handleMouseEnter = (href: string, hasChildren: boolean) => {
    if (!hasChildren) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(href);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* Top bar with phone - desktop */}
      <div className="hidden lg:block w-full bg-dark">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end gap-6 px-[120px] py-2">
          <a href="mailto:info@kumatex.pl" className="text-sm text-white/80 hover:text-primary transition-colors">
            info@kumatex.pl
          </a>
          <a href="tel:+48798889554" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
            <PhoneIcon className="w-4 h-4" />
            +48 798 889 554
          </a>
        </div>
      </div>

      <header className="w-full bg-white sticky top-0 z-50 shadow-sm relative">
        <nav className="mx-auto flex h-16 lg:h-[80px] max-w-[1440px] items-center justify-between px-4 lg:px-[60px]">
          <Link href="/" className="shrink-0" onClick={closeMobile}>
            <Image
              src="/images/imgKumatexLogo2.png"
              alt="KUMATEX"
              width={200}
              height={30}
              className="w-[140px] lg:w-[200px] h-auto"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0 font-[family-name:var(--font-inter)]">
            {seoNavigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = !!(item.children && item.children.length > 0);

              return (
                <li
                  key={item.href}
                  onMouseEnter={() => handleMouseEnter(item.href, hasChildren)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-1.5 xl:px-2 py-2.5 text-[11px] xl:text-[13px] uppercase transition-colors whitespace-nowrap",
                      isActive
                        ? "text-dark font-bold"
                        : "text-dark hover:text-primary"
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <span className="text-[9px] ml-0.5">▼</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile: phone button + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+48798889554"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-dark"
              aria-label="Zadzwoń"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileSubmenu(null); }}
              aria-label="Menu"
            >
              <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
              <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "opacity-0")} />
              <span className={cn("block w-6 h-0.5 bg-dark transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
            </button>
          </div>
        </nav>

        {/* Desktop mega menu panel */}
        {openDropdown && (() => {
          const section = seoNavigation.find(s => s.href === openDropdown);
          if (!section?.children?.length) return null;
          return (
            <>
              <div className="fixed inset-0 bg-black/20 z-40" onMouseEnter={handleMouseLeave} />
              <div className="absolute left-0 right-0 top-full z-50 flex justify-center px-[60px]">
                <MegaMenuPanel
                  section={section}
                  onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </>
          );
        })()}

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto pb-20">
            {/* Mobile contact info at top of menu */}
            <div className="px-4 py-4 bg-dark/5 border-b border-dark/10">
              <a href="tel:+48798889554" className="flex items-center gap-3 text-dark font-bold text-lg">
                <PhoneIcon className="w-5 h-5 text-primary" />
                +48 798 889 554
              </a>
              <a href="mailto:info@kumatex.pl" className="mt-2 block text-sm text-gray">
                info@kumatex.pl
              </a>
            </div>

            <ul className="px-4 py-4 space-y-0.5 font-[family-name:var(--font-inter)]">
              {seoNavigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const hasChildren = !!(item.children && item.children.length > 0);

                return (
                  <li key={item.href} className="border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={cn(
                          "flex-1 py-3 text-base uppercase transition-colors",
                          isActive
                            ? "text-dark font-bold"
                            : "text-dark"
                        )}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === item.href ? null : item.href)}
                          className="p-3 text-primary text-lg font-bold"
                        >
                          {mobileSubmenu === item.href ? "−" : "+"}
                        </button>
                      )}
                    </div>
                    {hasChildren && mobileSubmenu === item.href && (
                      <div className="ml-4 mb-3 space-y-0.5 border-l-2 border-primary/30 pl-4">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobile}
                            className="block py-2 text-sm text-dark hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA bar - bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-dark/10 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+48798889554"
          className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 font-[family-name:var(--font-inter)] font-bold text-dark"
        >
          <PhoneIcon className="w-5 h-5" />
          Zadzwoń
        </a>
        <Link
          href="/kontakt"
          className="flex flex-1 items-center justify-center gap-2 bg-dark py-3.5 font-[family-name:var(--font-inter)] font-bold text-white"
        >
          Napisz do nas
        </Link>
      </div>
    </>
  );
}
