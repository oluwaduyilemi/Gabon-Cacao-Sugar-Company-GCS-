"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    title: "Share & Analytical Info",
    body: "Key data on our share price, shareholder structure and analyst coverage.",
    stats: [
      { label: "Share price", value: "—" },
      { label: "Market cap", value: "—" },
      { label: "Shares outstanding", value: "—" },
      { label: "Ticker", value: "—" },
    ],
    topShareholders: "Top shareholders",
    topShareholdersBody: "Shareholder breakdown will be added here.",
    analystCoverage: "Analyst coverage",
    analystCoverageBody: "Analyst coverage details will be added here.",
  },
  fr: {
    title: "Actions et Analyses",
    body: "Données clés sur le cours de notre action, la structure actionnariale et la couverture par les analystes.",
    stats: [
      { label: "Cours de l'action", value: "—" },
      { label: "Capitalisation boursière", value: "—" },
      { label: "Actions en circulation", value: "—" },
      { label: "Symbole boursier", value: "—" },
    ],
    topShareholders: "Principaux actionnaires",
    topShareholdersBody: "La répartition des actionnaires sera ajoutée ici.",
    analystCoverage: "Couverture par les analystes",
    analystCoverageBody: "Les détails de la couverture par les analystes seront ajoutés ici.",
  },
};

export default function ShareInfo() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F9F7F2] rounded-2xl p-6 text-center border border-black/5"
              >
                <p className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                {t.topShareholders}
              </h2>
              <p className="text-gray-500 text-sm">
                {t.topShareholdersBody}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                {t.analystCoverage}
              </h2>
              <p className="text-gray-500 text-sm">
                {t.analystCoverageBody}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
