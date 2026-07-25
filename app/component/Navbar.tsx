
"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { ChevronDown, Menu, X, Lock, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const commodityLinks = [
    { name: t("cocoa"), href: "/commodities/cocoa" },
    { name: t("cashew"), href: "/commodities/cashew" },
    { name: t("timber"), href: "/commodities/timber" },
    { name: t("sugar"), href: "/commodities/sugar" },
  ];

  const otherLocale = locale === "en" ? "fr" : "en";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#3C2A21] shadow-xl py-2" 
          : "bg-[#3C2A21]/90 backdrop-blur-md py-4" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 px-8">
        <div className="flex justify-between items-center h-18">
<Link href="/" className="flex items-center shrink-0">
  <div className="relative w-[140px] h-[70px] md:w-[160px] md:h-[81px]"> 
    {/* <Image
      src="/images/chalogo.jpeg" 
      alt="GCS Commodities"
      fill
      priority
      className="object-contain brightness-130 contrast-150 saturate-150" 
      sizes="(max-width: 1000px) 140px, 160px"
    /> */}
  </div>
</Link>
    
{/*       

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13px] uppercase tracking-wider font-semibold text-white/90">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              {t("home")}
            </Link>

            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
              {t("about")}
            </Link>

            {/* Dropdown Container */}
            <div
              className="relative py-4" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors outline-none cursor-default">
                {t("commodities")}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180 text-[#D4AF37]" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 w-52 bg-white text-gray-800 rounded-lg shadow-2xl transition-all duration-300 origin-top border-t-4 border-[#D4AF37] ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-2"
                    : "opacity-0 scale-95 translate-y-0 pointer-events-none"
                }`}
              >
                <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />

                <div className="py-2">
                  {commodityLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-sm hover:bg-amber-50 hover:text-[#D4AF37] transition-colors font-medium normal-case tracking-normal"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/sustainability" className="hover:text-[#D4AF37] transition-colors">
              {t("sustainability")}
            </Link>

            <Link href="/news" className="hover:text-[#D4AF37] transition-colors">
              {t("news")}
            </Link>

            <Link href="/investor-centre" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              {t("investorCentre")}
              <Lock size={12} />
            </Link>
          </nav>

          {/* Language Switch + CTA Button */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <Link
              href={pathname}
              locale={otherLocale}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#D4AF37] transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <Globe size={14} />
              {otherLocale}
            </Link>

            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-md"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#3C2A21] text-white transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen py-8 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-6 px-8 text-base font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>{t("home")}</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>{t("about")}</Link>
          
          <div className="space-y-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full text-[#D4AF37]"
            >
              {t("commodities")}
              <ChevronDown size={18} className={isDropdownOpen ? "rotate-180" : ""} />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col space-y-4 pl-4 border-l border-[#D4AF37]/30">
                {commodityLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/sustainability" onClick={() => setIsOpen(false)}>{t("sustainability")}</Link>
          <Link href="/news" onClick={() => setIsOpen(false)}>{t("news")}</Link>
          <Link href="/team" onClick={() => setIsOpen(false)}>{t("team")}</Link>
          <Link href="/investor-centre" onClick={() => setIsOpen(false)} className="flex items-center gap-1.5">
            {t("investorCentre")}
            <Lock size={14} />
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>{t("contact")}</Link>

          <Link
            href={pathname}
            locale={otherLocale}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 text-[#D4AF37]"
          >
            <Globe size={16} />
            {otherLocale === "fr" ? "Français" : "English"}
          </Link>
        </div>
      </div>
    </header>
  );
}
