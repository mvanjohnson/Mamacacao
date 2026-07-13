import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
};

const variantStyles = {
  primary:
    "bg-[#5f321d] text-white hover:bg-[#d95c9a] shadow-[0_12px_30px_-14px_rgba(95,50,29,0.9)]",
  secondary:
    "bg-[#35c7cf] text-[#1d120d] hover:bg-[#2eb5bc] shadow-[0_12px_30px_-14px_rgba(53,199,207,0.8)]",
  outline:
    "border border-[#5f321d]/25 bg-white/80 text-[#5f321d] hover:border-[#35c7cf] hover:text-[#35c7cf]",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
