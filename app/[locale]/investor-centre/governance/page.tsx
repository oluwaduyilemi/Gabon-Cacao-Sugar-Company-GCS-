"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    title: "Governance",
    body: "Information on our board, committees and governance framework.",
    sections: [
      { title: "Board of Directors", description: "An overview of our board composition will be added here." },
      { title: "Committees", description: "Details on board committees will be added here." },
      { title: "Governance documents", description: "Articles of association, policies and charters will be added here." },
    ],
  },
  fr: {
    title: "Gouvernance",
    body: "Informations sur notre conseil d'administration, nos comités et notre cadre de gouvernance.",
    sections: [
      { title: "Conseil d'Administration", description: "Un aperçu de la composition de notre conseil sera ajouté ici." },
      { title: "Comités", description: "Les détails sur les comités du conseil seront ajoutés ici." },
      { title: "Documents de gouvernance", description: "Les statuts, politiques et chartes seront ajoutés ici." },
    ],
  },
};

export default function Governance() {
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

          <motion.div variants={fadeInUp} className="space-y-10">
            {t.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-500 text-sm">{section.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
