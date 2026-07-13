"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { FileText, TrendingUp, Calendar, ShieldCheck } from "lucide-react";

const content = {
  en: {
    title: "Investor Centre",
    body: "A dedicated space for our shareholders, analysts and financial partners — with our latest reports, financial data and governance information in one place.",
    quickLinks: [
      { name: "Reports & Presentations", href: "/investor-centre/reports", description: "Download our latest reports, presentations and results." },
      { name: "Share & Analytical Info", href: "/investor-centre/share-info", description: "Share price data, shareholder structure and analyst coverage." },
      { name: "Financial Calendar", href: "/investor-centre/financial-calendar", description: "Upcoming reporting dates and investor events." },
      { name: "Governance", href: "/investor-centre/governance", description: "Board composition, committees and governance documents." },
    ],
  },
  fr: {
    title: "Espace Investisseurs",
    body: "Un espace dédié à nos actionnaires, analystes et partenaires financiers — regroupant nos derniers rapports, données financières et informations de gouvernance en un seul endroit.",
    quickLinks: [
      { name: "Rapports et Présentations", href: "/investor-centre/reports", description: "Téléchargez nos derniers rapports, présentations et résultats." },
      { name: "Actions et Analyses", href: "/investor-centre/share-info", description: "Données sur le cours de l'action, structure actionnariale et couverture par les analystes." },
      { name: "Calendrier Financier", href: "/investor-centre/financial-calendar", description: "Prochaines dates de publication et événements pour les investisseurs." },
      { name: "Gouvernance", href: "/investor-centre/governance", description: "Composition du conseil, comités et documents de gouvernance." },
    ],
  },
};

const icons = [FileText, TrendingUp, Calendar, ShieldCheck];

export default function InvestorOverview() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <>
      <section className="relative pt-20 pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-serif font-bold leading-tight mb-6 text-slate-900"
            >
              {t.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium"
            >
              {t.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F7F2] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.quickLinks.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <Icon size={26} className="text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
