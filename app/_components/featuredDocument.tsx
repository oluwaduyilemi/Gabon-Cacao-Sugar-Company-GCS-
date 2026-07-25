"use client";

import { motion } from "framer-motion";
import { FileText, Download, PlayCircle } from "lucide-react";
import { fadeInUp } from "@/app/component/lib/animations";

interface FeaturedDocumentProps {
  eyebrow: string;
  title: string;
  date?: string;
  href?: string;
  downloadLabel: string;
  webcastLabel?: string;
  webcastHref?: string;
  /** When true, no real document exists yet — shows a "coming soon" state instead of a live download. */
  isPlaceholder?: boolean;
  placeholderNote?: string;
}

export default function FeaturedDocument({
  eyebrow,
  title,
  date,
  href,
  downloadLabel,
  webcastLabel,
  webcastHref,
  isPlaceholder = false,
  placeholderNote,
}: FeaturedDocumentProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[#3C2A21] rounded-3xl overflow-hidden shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Thumbnail panel */}
        <div className="bg-[#2A1D17] flex items-center justify-center p-10 md:p-0">
          <div className="w-20 h-24 md:w-24 md:h-32 bg-[#F9F7F2]/5 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center">
            <FileText size={32} className="text-[#D4AF37]/60" />
          </div>
        </div>

        {/* Content panel */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
            {eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-snug">
            {title}
          </h2>
          {date && <p className="text-white/50 text-sm mb-6">{date}</p>}

          {isPlaceholder ? (
            <p className="text-white/60 text-sm mt-2 max-w-md">
              {placeholderNote}
            </p>
          ) : (
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-white text-[#3C2A21] font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <Download size={16} />
                {downloadLabel}
              </a>
              {webcastLabel && webcastHref && (
                <a
                  href={webcastHref}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors border border-white/10"
                >
                  <PlayCircle size={16} />
                  {webcastLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
