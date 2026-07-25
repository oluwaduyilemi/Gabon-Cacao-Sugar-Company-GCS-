"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import TradeSpecification from "@/app/_components/TradeSpecification";

const content = {
  en: {
    title: "Key Figures",
    body: "A summary of our key financial and operational highlights.",
    specEyebrow: "Financial Highlights",
    specNote: "Detailed financial statements and comparative tables will be published here once available.",
    specs: [
      { label: "Revenue", value: "—" },
      { label: "EBITDA", value: "—" },
      { label: "Net Income", value: "—" },
      { label: "Export Volume", value: "—" },
      { label: "Reporting Period", value: "—" },
    ],
  },
  fr: {
    title: "Chiffres Clés",
    body: "Un résumé de nos principaux indicateurs financiers et opérationnels.",
    specEyebrow: "Faits Saillants Financiers",
    specNote: "Les états financiers détaillés et les tableaux comparatifs seront publiés ici dès qu'ils seront disponibles.",
    specs: [
      { label: "Chiffre d'Affaires", value: "—" },
      { label: "EBITDA", value: "—" },
      { label: "Résultat Net", value: "—" },
      { label: "Volume d'Exportation", value: "—" },
      { label: "Période de Référence", value: "—" },
    ],
  },
};

export default function KeyFigures() {
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

          <motion.div variants={fadeInUp}>
            <TradeSpecification eyebrow={t.specEyebrow} note={t.specNote} rows={t.specs} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
