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
    title: "Cocoa",
    overview: "Overview",
    body: "GCS sources premium cocoa beans, powder, liquor, and butter from verified farms across West and Central Africa. Our cocoa meets the highest international standards for quality, traceability, and sustainability.",
    sourcingRegionsLabel: "Sourcing Regions:",
    sourcingRegions: "Gabon, Cameroon, Côte d'Ivoire, Ghana",
    volumeLabel: "Volume Capabilities:",
    volume: "500 – 10,000+ metric tonnes per annum",
    buyersLabel: "Target Buyers:",
    buyers: "Chocolate manufacturers, confectionery companies, food processors, and industrial ingredient suppliers.",
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Full traceability from farm to port",
      "EU Deforestation Regulation compliant",
      "Premium grade beans & derivatives",
      "Consistent quality & supply",
    ],
    cta: "Request Supply Quote",
  },
  fr: {
    eyebrow: "Matière Première",
    title: "Cacao",
    overview: "Aperçu",
    body: "GCS sourcé des fèves de cacao, de la poudre, de la liqueur et du beurre de qualité supérieure auprès de fermes vérifiées d'Afrique de l'Ouest et Centrale. Notre cacao répond aux normes internationales les plus strictes en matière de qualité, de traçabilité et de durabilité.",
    sourcingRegionsLabel: "Régions d'Approvisionnement :",
    sourcingRegions: "Gabon, Cameroun, Côte d'Ivoire, Ghana",
    volumeLabel: "Capacités de Volume :",
    volume: "500 à plus de 10 000 tonnes métriques par an",
    buyersLabel: "Acheteurs Cibles :",
    buyers: "Fabricants de chocolat, entreprises de confiserie, transformateurs alimentaires et fournisseurs d'ingrédients industriels.",
    keyFeaturesTitle: "Caractéristiques Clés",
    keyFeatures: [
      "Traçabilité totale, de la ferme au port",
      "Conforme au règlement européen sur la déforestation",
      "Fèves et dérivés de qualité supérieure",
      "Qualité et approvisionnement constants",
    ],
    cta: "Demander un Devis d'Approvisionnement",
  },
};

export default function CocoaOverview() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-24 pt-40 bg-white">
    <section className="relative pt-4 pb-37 overflow-hidden">
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
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeInUp} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/commcoco.jpg" 
              alt="Premium Cocoa Beans"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3C2A21] mb-6">{t.overview}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {t.body}
              </p>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-8">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-bold text-[#3C2A21] min-w-[150px]">{t.sourcingRegionsLabel}</span>
                <span className="text-gray-500">{t.sourcingRegions}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-bold text-[#3C2A21] min-w-[150px]">{t.volumeLabel}</span>
                <span className="text-gray-500">{t.volume}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <span className="font-bold text-[#3C2A21] min-w-[150px]">{t.buyersLabel}</span>
                <span className="text-gray-500">{t.buyers}</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-serif font-bold text-[#3C2A21] mb-4">{t.keyFeaturesTitle}</h3>
              <div className="grid grid-cols-1 gap-3">
                {t.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37]" size={20} />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="inline-block"> 
                <button className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#3C2A21] font-bold py-2.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-amber-900/10">
                  {t.cta}
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
