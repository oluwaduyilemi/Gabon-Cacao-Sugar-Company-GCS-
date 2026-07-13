"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Commodity",
    title: "Timber",
    overview: "Overview",
    body: "Sustainably harvested tropical hardwoods from certified Gabonese forests, processed to international specifications for construction, furniture, and specialty applications.",
    sourcingRegionsLabel: "Sourcing Regions:",
    sourcingRegions: "Gabon",
    volumeLabel: "Volume Capabilities:",
    volume: "Custom volumes based on species and specification",
    buyersLabel: "Target Buyers:",
    buyers: "Construction companies, furniture manufacturers, and international timber traders.",
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Sustainably harvested & certified",
      "Species diversity",
      "Custom processing available",
      "International shipping logistics",
    ],
    cta: "Request Supply Quote",
  },
  fr: {
    eyebrow: "Matière Première",
    title: "Bois",
    overview: "Aperçu",
    body: "Bois durs tropicaux récoltés de manière durable dans des forêts gabonaises certifiées, transformés selon les spécifications internationales pour la construction, l'ameublement et les applications spécialisées.",
    sourcingRegionsLabel: "Régions d'Approvisionnement :",
    sourcingRegions: "Gabon",
    volumeLabel: "Capacités de Volume :",
    volume: "Volumes personnalisés selon l'essence et les spécifications",
    buyersLabel: "Acheteurs Cibles :",
    buyers: "Entreprises de construction, fabricants de meubles et négociants internationaux de bois.",
    keyFeaturesTitle: "Caractéristiques Clés",
    keyFeatures: [
      "Récolte durable et certifiée",
      "Diversité des essences",
      "Transformation sur mesure disponible",
      "Logistique d'expédition internationale",
    ],
    cta: "Demander un Devis d'Approvisionnement",
  },
};

export default function TimberPage() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-48 pb-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
            >
              {t.eyebrow}
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-tight"
            >
              {t.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/timber.jpg" 
                alt="Sustainably harvested tropical hardwoods"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8 ">
              <div>
                <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">{t.overview}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.body}
                </p>
              </div>

              <div className="space-y-5 border-t border-gray-100 pt-8">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">{t.sourcingRegionsLabel}</span>
                  <span className="text-gray-500">{t.sourcingRegions}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">{t.volumeLabel}</span>
                  <span className="text-gray-500">{t.volume}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-bold text-[#3C2A21] min-w-[160px]">{t.buyersLabel}</span>
                  <span className="text-gray-500">{t.buyers}</span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-5">{t.keyFeaturesTitle}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {t.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#D4AF37]" size={22} />
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link href="/contact" className="inline-block">
                  <button className="bg-[#B8962F] hover:bg-[#3C2A21] text-white font-bold py-3 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/10">
                    {t.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
