
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[#3C2A21] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              GCS
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">{nav("home")}</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">{nav("about")}</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#D4AF37] transition-colors">{nav("sustainability")}</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">{nav("contact")}</Link></li>
              <li><Link href="/investor-centre" className="hover:text-[#D4AF37] transition-colors">{nav("investorCentre")}</Link></li>

            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              {nav("commodities")}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/commodities/cocoa" className="hover:text-[#D4AF37] transition-colors">
                  {nav("cocoa")}
                </Link>
              </li>
              <li>
                <Link href="/commodities/cashew" className="hover:text-[#D4AF37] transition-colors">
                {nav("cashew")}
                </Link>
              </li>
              <li>
                <Link href="/commodities/timber" className="hover:text-[#D4AF37] transition-colors">
                  {nav("timber")}
                </Link>
              </li>
              <li>
                <Link href="/commodities/sugar" className="hover:text-[#D4AF37] transition-colors">
                  {nav("sugar")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              {nav("contact")}
            </h4>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <a
                  href="mailto:sales@gaboncs-co.com"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  sales@gaboncs-co.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <p className="leading-relaxed">
                  Immeuble Dumez BP2326<br />
                  Libreville, Gabon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            {t("copyright", { year: new Date().getFullYear() })}
          </p>

          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#D4AF37] transition-colors">
              {t("termsOfService")}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
