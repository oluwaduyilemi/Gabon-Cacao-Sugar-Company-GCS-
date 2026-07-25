"use client";

import { Link } from "@/i18n/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { LogOut } from "lucide-react";

const content = {
  en: {
    links: [
      { name: "Overview", href: "/investor-centre" },
      { name: "Reports & Presentations", href: "/investor-centre/reports" },
      { name: "Share & Analytical Info", href: "/investor-centre/share-info" },
      { name: "Key Figures", href: "/investor-centre/key-figures" },
      { name: "Financial Calendar", href: "/investor-centre/financial-calendar" },
      { name: "Governance", href: "/investor-centre/governance" },
    ],
    logout: "Log out",
  },
  fr: {
    links: [
      { name: "Aperçu", href: "/investor-centre" },
      { name: "Rapports et Présentations", href: "/investor-centre/reports" },
      { name: "Actions et Analyses", href: "/investor-centre/share-info" },
      { name: "Chiffres Clés", href: "/investor-centre/key-figures" },
      { name: "Calendrier Financier", href: "/investor-centre/financial-calendar" },
      { name: "Gouvernance", href: "/investor-centre/governance" },
    ],
    logout: "Déconnexion",
  },
};

export default function InvestorNav() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  if (pathname?.startsWith("/investor-centre/login")) {
    return null;
  }

  async function handleLogout() {
    await fetch("/api/investor-logout", { method: "POST" });
    router.push("/investor-centre/login");
    router.refresh();
  }

  return (
    <div className="sticky top-[72px] z-40 bg-[#F9F7F2] pt-2 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-auto">
        <nav className="flex gap-6 py-4 text-[13px] uppercase tracking-wider font-semibold text-[#3C2A21] whitespace-nowrap">
          {t.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#D4AF37] ${
                  isActive ? "text-[#D4AF37]" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-[12px] uppercase tracking-wider font-semibold text-[#3C2A21]/60 hover:text-[#D4AF37] transition-colors shrink-0 pl-6"
        >
          <LogOut size={14} />
          {t.logout}
        </button>
      </div>
    </div>
  );
}
