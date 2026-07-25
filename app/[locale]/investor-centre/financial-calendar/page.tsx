"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { CalendarDays } from "lucide-react";

const content = {
  en: {
    title: "Financial Calendar",
    body: "Our phased commissioning and scale-up plan, with milestones tied to each stage of financing.",
    phases: [
      { phase: "Commissioning", timeline: "Q3–Q4 2026", milestone: "Full commissioning of the Owendo facility; first export shipments." },
      { phase: "Ramp-Up", timeline: "Q1–Q2 2027", milestone: "1,000 MT throughput achieved; EUDR and Rainforest Alliance certification underway." },
      { phase: "Optimisation", timeline: "Q3–Q4 2027", milestone: "85% capacity utilisation; operational break-even; expansion of offtake agreements." },
      { phase: "Transformation", timeline: "2028", milestone: "Launch of secondary processing; CEMAC regional market entry." },
    ],
    note: "Dates reflect the base-case plan and are subject to change as financing and construction progress.",
  },
  fr: {
    title: "Calendrier Financier",
    body: "Notre plan de mise en service et de montée en puissance par phases, avec des jalons liés à chaque étape de financement.",
    phases: [
      { phase: "Mise en Service", timeline: "T3–T4 2026", milestone: "Mise en service complète de l'usine d'Owendo ; premières expéditions à l'export." },
      { phase: "Montée en Puissance", timeline: "T1–T2 2027", milestone: "Débit de 1 000 MT atteint ; certifications RDUE et Rainforest Alliance en cours." },
      { phase: "Optimisation", timeline: "T3–T4 2027", milestone: "85% d'utilisation de la capacité ; seuil de rentabilité opérationnel ; extension des accords d'achat." },
      { phase: "Transformation", timeline: "2028", milestone: "Lancement de la transformation secondaire ; entrée sur le marché régional CEMAC." },
    ],
    note: "Les dates reflètent le scénario de base et peuvent évoluer selon l'avancement du financement et de la construction.",
  },
};

export default function FinancialCalendar() {
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

          <motion.div variants={fadeInUp} className="relative border-l-2 border-[#D4AF37]/30 ml-4 pl-8 space-y-10">
            {t.phases.map((p) => (
              <div key={p.phase} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white shadow-sm" />
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <CalendarDays size={16} className="text-[#D4AF37]" />
                  <h3 className="font-serif font-bold text-lg text-slate-900">{p.phase}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-amber-50 px-2 py-0.5 rounded-full">
                    {p.timeline}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{p.milestone}</p>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-gray-400 mt-12">
            {t.note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
