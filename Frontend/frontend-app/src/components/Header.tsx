"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/siteData";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        isHome
          ? "fixed inset-x-0 top-0 border-b border-white/15 bg-black/25 backdrop-blur-md"
          : "sticky top-0 border-b border-[#5f321d]/10 bg-[#fff7ef]/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={`flex shrink-0 items-center gap-3 ${
            isHome ? "text-white" : "text-[#4b2715]"
          }`}
        >
          <Image
            src="/media/brand/logo.png"
            alt="Mama Cacao Wow logo"
            width={576}
            height={796}
            priority
            className="h-10 w-auto max-w-[110px] shrink-0 object-contain sm:h-12 sm:max-w-[130px]"
          />
          <span className="font-avinga text-xl tracking-wide sm:text-2xl">mamacacao</span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-full px-2.5 py-1.5 text-xs transition-all duration-300 sm:px-3 sm:text-sm ${
                  isHome
                    ? active
                      ? "bg-white/90 text-[#3d2216]"
                      : "text-white/95 hover:bg-white/15 hover:text-white"
                    : active
                      ? "bg-[#5f321d] text-white shadow-[0_8px_24px_-12px_rgba(95,50,29,0.95)]"
                      : "text-[#5f321d] hover:bg-white/80 hover:text-[#311a11]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
