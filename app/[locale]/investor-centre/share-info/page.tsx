"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { Users, LineChart } from "lucide-react";
import TradeSpecification from "@/app/_components/TradeSpecification";
import InvestorEmptyState from "@/app/_components/InvestorEmptyState";

const content = {
  en: {
    title: "Share & Analytical Info",
    body: "Key data on our share price, shareholder structure and analyst coverage.",
    specEyebrow: "Share Overview",
    specNote: "Figures will be updated here once GCS's share is publicly listed and trading data becomes available.",
    specs: [
      { label: "Share Price", value: "—" },
      { label: "Market Cap", value: "—" },
      { label: "Shares Outstanding", value: "—" },
      { label: "Ticker", value: "—" },
    ],
    topShareholders: "Top Shareholders",
    topShareholdersBody: "Shareholder breakdown will be published here.",
    analystCoverage: "Analyst Coverage",
    analystCoverageBody: "Analyst coverage details will be published here.",
  },
  fr: {
    title: "Actions et Analyses",
    body: "Données clés sur le cours de notre action, la structure actionnariale et la couverture par les analystes.",
    specEyebrow: "Aperçu de l'Action",
    specNote: "Les chiffres seront mis à jour ici dès que l'action de GCS sera cotée publiquement et que les données de transaction seront disponibles.",
    specs: [
      { label: "Cours de l'Action", value: "—" },
      { label: "Capitalisation Boursière", value: "—" },
      { label: "Actions en Circulation", value: "—" },
      { label: "Symbole Boursier", value: "—" },
    ],
    topShareholders: "Principaux Actionnaires",
    topShareholdersBody: "La répartition des actionnaires sera publiée ici.",
    analystCoverage: "Couverture par les Analystes",
    analystCoverageBody: "Les détails de la couverture par les analystes seront publiés ici.",
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

          <motion.div variants={fadeInUp} className="mb-16">
            <TradeSpecification eyebrow={t.specEyebrow} note={t.specNote} rows={t.specs} />
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InvestorEmptyState icon={Users} title={t.topShareholders} body={t.topShareholdersBody} />
            <InvestorEmptyState icon={LineChart} title={t.analystCoverage} body={t.analystCoverageBody} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
