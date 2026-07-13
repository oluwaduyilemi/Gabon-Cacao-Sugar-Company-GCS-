"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { FileDown } from "lucide-react";

// Placeholder data — replace `href` with real PDF paths (e.g. in /public/documents/)
// once the client provides the actual files.
const content = {
  en: {
    title: "Reports & Presentations",
    body: "Download our latest financial reports, results presentations and investor materials.",
    reports: [
      { title: "Q2 2026 Investor Presentation", date: "To be added" },
      { title: "Annual Report 2025", date: "To be added" },
      { title: "Q1 2026 Financial Results", date: "To be added" },
    ],
    note: "Documents will be added here as they become available.",
  },
  fr: {
    title: "Rapports et Présentations",
    body: "Téléchargez nos derniers rapports financiers, présentations de résultats et documents destinés aux investisseurs.",
    reports: [
      { title: "Présentation aux Investisseurs T2 2026", date: "À venir" },
      { title: "Rapport Annuel 2025", date: "À venir" },
      { title: "Résultats Financiers T1 2026", date: "À venir" },
    ],
    note: "Les documents seront ajoutés ici dès qu'ils seront disponibles.",
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
            className="text-gray-500 mb-12 max-w-2xl"
          >
            {t.body}
          </motion.p>

          <motion.div variants={fadeInUp} className="divide-y divide-black/5 border-y border-black/5">
            {t.reports.map((report) => (
              <a
                key={report.title}
                href="#"
                className="flex items-center justify-between py-6 group hover:bg-[#F9F7F2] transition-colors px-4 -mx-4 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                    {report.title}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{report.date}</p>
                </div>
                <FileDown size={20} className="text-[#D4AF37] shrink-0" />
              </a>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-gray-400 mt-8">
            {t.note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
