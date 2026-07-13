import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabon CS",
  description: "GCS Commodities is a leading force in West African trade, specializing in the sustainable sourcing and global distribution of high-value agricultural and timber assets. By bridging the gap between local producers and international markets, we ensure excellence, integrity, and efficiency at every stage of the supply chain.",
  keywords: 'Gabon Cacao, Sugar Company Gabon, GCS Commodities, Agricultural Exports Gabon',
 icons: {
    icon: [
      { url: '/favicon_png/favicon-32x32.png', type: 'image/svg+xml' },
    ],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased` }>
        <NextIntlClientProvider>
          <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
