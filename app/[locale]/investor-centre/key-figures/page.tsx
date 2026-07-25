"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

// Sourced from the June 2026 DFI investor dossier's base-case financial model.
const content = {
  en: {
    title: "Key Figures",
    body: "A summary of our base-case financial projections, based on the June 2026 investor dossier.",
    tableTitle: "Three-Year Financial Projection",
    tableNote: "Figures reflect the base-case model at 1,000 / 1,500 / 2,000 MT annual throughput. Conservative price assumptions: cocoa butter USD 8,500/MT, cocoa powder USD 4,000/MT.",
    headers: { metric: "Metric", y1: "Year 1", y2: "Year 2", y3: "Year 3" },
    rows: [
      { metric: "Throughput (MT)", y1: "1,000", y2: "1,500", y3: "2,000" },
      { metric: "Total Revenue (FCFA)", y1: "2,828,400,000", y2: "4,242,600,000", y3: "5,656,800,000" },
      { metric: "Gross Margin", y1: "47%", y2: "47%", y3: "47%" },
      { metric: "EBITDA (FCFA)", y1: "831,299,580", y2: "1,409,784,320", y3: "1,987,653,307" },
      { metric: "EBITDA Margin", y1: "29.4%", y2: "33.2%", y3: "35.1%" },
    ],
    highlightsTitle: "Highlights",
    highlights: [
      { label: "EBITDA Growth", value: "2.4×", sub: "Year 1 to Year 3" },
      { label: "Gross Margin", value: "47%", sub: "Consistent across all years" },
      { label: "Revenue Growth", value: "2×", sub: "Year 1 to Year 3" },
    ],
  },
  fr: {
    title: "Chiffres Clés",
    body: "Un résumé de nos projections financières de base, issues du dossier investisseurs de juin 2026.",
    tableTitle: "Projection Financière sur Trois Ans",
    tableNote: "Les chiffres reflètent le scénario de base à un débit annuel de 1 000 / 1 500 / 2 000 MT. Hypothèses de prix prudentes : beurre de cacao 8 500 USD/MT, poudre de cacao 4 000 USD/MT.",
    headers: { metric: "Indicateur", y1: "Année 1", y2: "Année 2", y3: "Année 3" },
    rows: [
      { metric: "Débit (MT)", y1: "1 000", y2: "1 500", y3: "2 000" },
      { metric: "Chiffre d'Affaires Total (FCFA)", y1: "2 828 400 000", y2: "4 242 600 000", y3: "5 656 800 000" },
      { metric: "Marge Brute", y1: "47%", y2: "47%", y3: "47%" },
      { metric: "EBITDA (FCFA)", y1: "831 299 580", y2: "1 409 784 320", y3: "1 987 653 307" },
      { metric: "Marge EBITDA", y1: "29,4%", y2: "33,2%", y3: "35,1%" },
    ],
    highlightsTitle: "Faits Saillants",
    highlights: [
      { label: "Croissance EBITDA", value: "2,4×", sub: "De l'Année 1 à l'Année 3" },
      { label: "Marge Brute", value: "47%", sub: "Constante sur toutes les années" },
      { label: "Croissance du CA", value: "2×", sub: "De l'Année 1 à l'Année 3" },
    ],
  },
};

export default function KeyFigures() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-12 max-w-2xl">
            {t.body}
          </motion.p>

          {/* Highlights strip */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
          >
            {t.highlights.map((h) => (
              <div key={h.label} className="bg-[#3C2A21] rounded-2xl p-6 text-center">
                <p className="text-3xl font-serif font-bold text-[#D4AF37] mb-1">{h.value}</p>
                <p className="text-white text-sm font-semibold">{h.label}</p>
                <p className="text-white/50 text-xs mt-1">{h.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Financial table */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2A21]/50 mb-4">
              {t.tableTitle}
            </h2>
            <div className="border border-[#3C2A21]/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#3C2A21] text-white">
                      <th className="text-left px-6 py-3 font-semibold">{t.headers.metric}</th>
                      <th className="text-right px-6 py-3 font-semibold">{t.headers.y1}</th>
                      <th className="text-right px-6 py-3 font-semibold">{t.headers.y2}</th>
                      <th className="text-right px-6 py-3 font-semibold">{t.headers.y3}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3C2A21]/8">
                    {t.rows.map((row) => (
                      <tr key={row.metric} className="hover:bg-[#F9F7F2] transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{row.metric}</td>
                        <td className="px-6 py-4 text-right text-gray-600 font-mono text-xs md:text-sm">{row.y1}</td>
                        <td className="px-6 py-4 text-right text-gray-600 font-mono text-xs md:text-sm">{row.y2}</td>
                        <td className="px-6 py-4 text-right text-gray-600 font-mono text-xs md:text-sm">{row.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">{t.tableNote}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
