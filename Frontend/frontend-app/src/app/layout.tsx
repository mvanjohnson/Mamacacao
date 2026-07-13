import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const avinga = localFont({
  src: "../assets/fonts/Avinga.woff2",
  variable: "--font-avinga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mama Cacao Wow",
  description:
    "Ceremonial cacao and The Ritual Bar — mobile beverage catering for weddings, events, and gatherings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${avinga.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff9f3] text-[#311a11]">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
