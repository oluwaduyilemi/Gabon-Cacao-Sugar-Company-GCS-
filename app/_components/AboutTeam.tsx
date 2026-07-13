
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Leadership",
    title: "Meet Our Team",
    team: [
      { name: "Charles-Daniel TCHEN", role: "CEO & Founder", bio: "Visionary entrepreneur restoring Gabon's agricultural legacy through global trade partnerships.", image: "/images/ceo.jpeg" },
      { name: "William BRUCE-VANDERPUYE", role: "Chief Operating Manager", bio: "Experienced commodity professional driving operational excellence across African and international markets.", image: "/images/director.jpg" },
    ],
  },
  fr: {
    eyebrow: "Direction",
    title: "Rencontrez Notre Équipe",
    team: [
      { name: "Charles-Daniel TCHEN", role: "PDG & Fondateur", bio: "Entrepreneur visionnaire restaurant l'héritage agricole du Gabon à travers des partenariats commerciaux mondiaux.", image: "/images/ceo.jpeg" },
      { name: "William BRUCE-VANDERPUYE", role: "Directeur Général des Opérations", bio: "Professionnel expérimenté des matières premières, moteur de l'excellence opérationnelle sur les marchés africains et internationaux.", image: "/images/director.jpg" },
    ],
  },
};

export default function AboutTeam() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeInUp} className="text-[#D4A017] font-bold tracking-[0.2em] text-xs uppercase">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
            {t.title}
          </motion.h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"
        >
          {t.team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="md:w-75 w-90 h-100 md:h-85 p-2 relative transition-transform duration-500 ">
                  <div className="relative w-full h-full overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute  transition-transform duration-500 " />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                {member.name}
              </h3>
              <p className="text-[#D4A017] font-bold text-sm uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
