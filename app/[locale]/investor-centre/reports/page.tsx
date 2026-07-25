"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { FileDown, FileText } from "lucide-react";

const content = {
  en: {
    title: "Reports & Presentations",
    body: "Download our latest financial reports, results presentations and investor materials.",
    comingSoon: "Coming soon",
    categories: [
      {
        name: "Investor Presentations",
        items: [
          {
            title: "DFI Investor Deck — Industrial Cocoa Transformation Platform",
            date: "June 2026",
            href: "/documents/gcs-investor-deck.pdf",
          },
        ],
      },
      {
        name: "Quarterly Results",
        items: [{ title: "Q4 2026 Financial Results", date: null, href: null }],
      },
      {
        name: "Annual Reports",
        items: [{ title: "Annual Report 2026", date: null, href: null }],
      },
    ],
    note: "More documents will be added here as they become available.",
  },
  fr: {
    title: "Rapports et Présentations",
    body: "Téléchargez nos derniers rapports financiers, présentations de résultats et documents destinés aux investisseurs.",
    comingSoon: "Bientôt disponible",
    categories: [
      {
        name: "Présentations aux Investisseurs",
        items: [
          {
            title: "Dossier Investisseurs DFI — Plateforme Industrielle de Transformation du Cacao",
            date: "Juin 2026",
            href: "/documents/gcs-investor-deck.pdf",
          },
        ],
      },
      {
        name: "Résultats Trimestriels",
        items: [{ title: "Résultats Financiers T4 2026", date: null, href: null }],
      },
      {
        name: "Rapports Annuels",
        items: [{ title: "Rapport Annuel 2026", date: null, href: null }],
      },
    ],
    note: "D'autres documents seront ajoutés ici dès qu'ils seront disponibles.",
  },
};

export default function ReportsPresentations() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 mb-14 max-w-2xl"
          >
            {t.body}
          </motion.p>

          <div className="space-y-12">
            {t.categories.map((category) => (
              <motion.div key={category.name} variants={fadeInUp}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2A21]/50 mb-4">
                  {category.name}
                </h2>
                <div className="divide-y divide-black/5 border-y border-black/5">
                  {category.items.map((report) =>
                    report.href ? (
                      <a
                        key={report.title}
                        href={report.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex items-center gap-4 py-5 group hover:bg-[#F9F7F2] transition-colors px-4 -mx-4 rounded-lg"
                      >
                        <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                          <FileText size={16} className="text-[#D4AF37]" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                            {report.title}
                          </p>
                          <p className="text-sm text-gray-400 mt-0.5">{report.date}</p>
                        </div>
                        <FileDown size={18} className="text-[#D4AF37] shrink-0" />
                      </a>
                    ) : (
                      <div
                        key={report.title}
                        className="flex items-center gap-4 py-5 px-4 -mx-4 opacity-50"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <FileText size={16} className="text-gray-400" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-slate-500">
                            {report.title}
                          </p>
                          <p className="text-sm text-gray-400 mt-0.5">{t.comingSoon}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
