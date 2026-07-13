"use client";

import { Link } from "@/i18n/navigation"; 
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    title: "Ready to Source Premium Commodities?",
    body: "Connect with our team to discuss supply, pricing, and logistics for your commodity needs.",
    cta: "Request Trade Inquiry",
  },
  fr: {
    title: "Prêt à Sourcer des Matières Premières de Qualité ?",
    body: "Contactez notre équipe pour discuter de l'approvisionnement, des prix et de la logistique adaptés à vos besoins.",
    cta: "Demander une Consultation Commerciale",
  },
};

export default function CTA() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="pb-25 pt-9 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6"
          >
            {t.title}
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            {t.body}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#0B1221] hover:bg-[#D4A017] text-white hover:text-black font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-amber-200/50 uppercase tracking-widest text-xs">
                {t.cta}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
