"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { CalendarDays } from "lucide-react";

// Placeholder events — replace with real dates once confirmed.
const content = {
  en: {
    title: "Financial Calendar",
    body: "Upcoming reporting dates and investor events.",
    events: [
      { date: "To be added", title: "Q3 2026 Financial Results" },
      { date: "To be added", title: "Annual General Meeting" },
      { date: "To be added", title: "Q4 2026 Financial Results" },
    ],
  },
  fr: {
    title: "Calendrier Financier",
    body: "Prochaines dates de publication et événements pour les investisseurs.",
    events: [
      { date: "À venir", title: "Résultats Financiers T3 2026" },
      { date: "À venir", title: "Assemblée Générale Annuelle" },
      { date: "À venir", title: "Résultats Financiers T4 2026" },
    ],
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

          <motion.div variants={fadeInUp} className="divide-y divide-black/5 border-y border-black/5">
            {t.events.map((event) => (
              <div key={event.title} className="flex items-center gap-4 py-6">
                <CalendarDays size={20} className="text-[#D4AF37] shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">{event.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
