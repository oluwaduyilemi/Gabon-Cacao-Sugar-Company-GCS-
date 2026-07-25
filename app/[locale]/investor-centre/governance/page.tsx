"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";
import { ScrollText } from "lucide-react";
import InvestorEmptyState from "@/app/_components/InvestorEmptyState";

const content = {
  en: {
    title: "Governance",
    body: "Our executive team and board bring international commodity trading, industrial operations and Gabon-specific institutional experience to GCS.",
    executiveTitle: "Executive Team",
    executives: [
      {
        name: "Charles-Daniel Tchen",
        role: "Founder & CEO",
        bio: "Expert in agricultural commodity trading and CEMAC regional logistics. Specialist in trade finance structuring and international banking negotiations. Active speaker at ACFIF 2026 and Chocoa Amsterdam 2026.",
        photo: "/images/standceo.jpeg",
      },
      {
        name: "Mohamed Diarrassouba",
        role: "Technical Manager",
        bio: "15+ years of industrial cocoa plant management experience, including senior roles at Barry Callebaut. Expert in maintenance management, utilities and industrial process optimisation.",
        photo: null,
      },
    ],
    directorsTitle: "Non-Executive Directors",
    directors: [
      {
        name: "Charles Tchen",
        role: "Non-Executive Director",
        bio: "Former Delegated General Manager of Shell Gabon. 30+ years of large-scale industrial leadership in Gabon. Honorary Consul of the Netherlands in Gabon.",
      },
      {
        name: "William Bruce-Vanderpuye III",
        role: "Non-Executive Director",
        bio: "Expert in international energy and commodity trading. Specialist in complex trade finance structuring and cross-border market entry.",
      },
    ],
    docsTitle: "Governance Documents",
    docsBody: "Articles of association, policies and charters will be added here.",
  },
  fr: {
    title: "Gouvernance",
    body: "Notre équipe dirigeante et notre conseil réunissent une expérience internationale en négoce de matières premières, en opérations industrielles et une connaissance institutionnelle spécifique au Gabon.",
    executiveTitle: "Équipe Dirigeante",
    executives: [
      {
        name: "Charles-Daniel Tchen",
        role: "Fondateur et PDG",
        bio: "Expert en négoce de matières premières agricoles et en logistique régionale CEMAC. Spécialiste de la structuration du financement commercial et des négociations bancaires internationales. Intervenant actif à l'ACFIF 2026 et à Chocoa Amsterdam 2026.",
        photo: "/images/standceo.jpeg",
      },
      {
        name: "Mohamed Diarrassouba",
        role: "Directeur Technique",
        bio: "Plus de 15 ans d'expérience en gestion d'usines industrielles de cacao, incluant des postes de direction chez Barry Callebaut. Expert en gestion de la maintenance, des utilités et de l'optimisation des processus industriels.",
        photo: null,
      },
    ],
    directorsTitle: "Administrateurs Non-Exécutifs",
    directors: [
      {
        name: "Charles Tchen",
        role: "Administrateur Non-Exécutif",
        bio: "Ancien Directeur Général Délégué de Shell Gabon. Plus de 30 ans de leadership industriel à grande échelle au Gabon. Consul Honoraire des Pays-Bas au Gabon.",
      },
      {
        name: "William Bruce-Vanderpuye III",
        role: "Administrateur Non-Exécutif",
        bio: "Expert en négoce international de l'énergie et des matières premières. Spécialiste de la structuration complexe du financement commercial et de l'entrée sur des marchés transfrontaliers.",
      },
    ],
    docsTitle: "Documents de Gouvernance",
    docsBody: "Les statuts, politiques et chartes seront ajoutés ici.",
  },
};

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="w-full h-full bg-[#3C2A21] flex items-center justify-center">
      <span className="text-[#D4AF37] font-serif font-bold text-3xl">{initials}</span>
    </div>
  );
}

export default function Governance() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-serif font-bold text-slate-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-14 max-w-2xl">
            {t.body}
          </motion.p>

          {/* Executive Team */}
          <motion.h2 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#3C2A21]/50 mb-6">
            {t.executiveTitle}
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.executives.map((person) => (
              <div key={person.name} className="flex gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative">
                  {person.photo ? (
                    <Image src={person.photo} alt={person.name} fill className="object-cover" />
                  ) : (
                    <Initials name={person.name} />
                  )}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900">{person.name}</h3>
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wide mb-2">{person.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Non-Executive Directors */}
          <motion.h2 variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#3C2A21]/50 mb-6">
            {t.directorsTitle}
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.directors.map((person) => (
              <div key={person.name} className="flex gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative">
                  <Initials name={person.name} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900">{person.name}</h3>
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wide mb-2">{person.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
