"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    title: "Key Figures",
    body: "A summary of our key financial and operational highlights.",
    figures: [
      { label: "Revenue", value: "—" },
      { label: "EBITDA", value: "—" },
      { label: "Net income", value: "—" },
      { label: "Production", value: "—" },
    ],
    note: "Detailed financial tables will be added here.",
  },
  fr: {
    title: "Chiffres Clés",
    body: "Un résumé de nos principaux indicateurs financiers et opérationnels.",
    figures: [
      { label: "Chiffre d'affaires", value: "—" },
      { label: "EBITDA", value: "—" },
      { label: "Résultat net", value: "—" },
      { label: "Production", value: "—" },
    ],
    note: "Des tableaux financiers détaillés seront ajoutés ici.",
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

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {t.figures.map((figure) => (
              <div
                key={figure.label}
                className="bg-[#F9F7F2] rounded-2xl p-6 text-center border border-black/5"
              >
                <p className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  {figure.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {figure.label}
                </p>
              </div>
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
