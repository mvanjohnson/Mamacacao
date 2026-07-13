import Image from "next/image";
import Link from "next/link";
import { contactEmail, footerLinks } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#5f321d]/10 bg-[#2e170f] text-[#f9e7ca]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/media/brand/logo.png"
              alt="Mama Cacao Wow logo"
              width={576}
              height={796}
              className="h-12 w-auto max-w-[130px] object-contain"
            />
            <span className="font-avinga text-2xl">mamacacao</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#f9e7ca]/85">
            Pouring love into our world, one sip at a time. Ceremonial cacao and The Ritual Bar
            for gatherings that matter.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#35c7cf]">Menu</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#f9e7ca]/90 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d95c9a]">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#f9e7ca]/90 transition hover:text-white"
              >
                {contactEmail}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mamacacaowow"
                target="_blank"
                rel="noreferrer"
                className="text-[#f9e7ca]/90 transition hover:text-white"
              >
                @mamacacaowow
              </a>
            </li>
            <li>
              <a
                href="https://www.theknot.com/marketplace/the-ritual-bar-by-mama-cacao-wow-little-rock-ar-2106022"
                target="_blank"
                rel="noreferrer"
                className="text-[#f9e7ca]/90 transition hover:text-white"
              >
                Book on The Knot
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-[#f9e7ca]/60">
        © {new Date().getFullYear()} Mama Cacao Wow. All rights reserved.
      </div>
    </footer>
  );
}
