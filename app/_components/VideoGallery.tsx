"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Play, X } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    eyebrow: "Behind the Scenes",
    title: "GCS in Motion",
    body: "Explore our operations, partnerships, and impact across the supply chain.",
    videos: [
      { title: "Cocoa Farm Origins", duration: "0:16", src: "/images/onevideo.mp4" },
      { title: "Global Logistics Network", duration: "0:15", src: "/images/vedioone.mp4" },
      { title: "Processing & Quality Control", duration: "0:07", src: "/images/coovideo.mp4" },
    ],
  },
  fr: {
    eyebrow: "Dans les Coulisses",
    title: "GCS en Mouvement",
    body: "Découvrez nos opérations, nos partenariats et notre impact tout au long de la chaîne d'approvisionnement.",
    videos: [
      { title: "Origines de la Ferme de Cacao", duration: "0:16", src: "/images/onevideo.mp4" },
      { title: "Réseau Logistique Mondial", duration: "0:15", src: "/images/vedioone.mp4" },
      { title: "Transformation et Contrôle Qualité", duration: "0:07", src: "/images/coovideo.mp4" },
    ],
  },
};

export default function VideoGallery() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-32  bg-white">
      <div className="container mx-auto px-6">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20" 
        >
          <motion.span variants={fadeInUp} className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {t.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg md:text-xl leading-relaxed">
            {t.body}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {t.videos.map((video, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.src)}
            >
              <div className="relative aspect-[14/11] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-8 bg-black transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)]">
                
                <video
                  src={video.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 z-20">
                    <Play className="text-black fill-current ml-1" size={28} />
                  </div>
                </div>

                <div className="absolute bottom-6 right-8 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-lg z-20">
                  {video.duration}
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#3C2A21] group-hover:text-[#D4AF37] transition-colors duration-300 px-2">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors z-[110]"
            >
              <X size={48} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10"
            >
              <video src={activeVideo} controls autoPlay className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
