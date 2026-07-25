"use client";

import Image from "next/image";

interface NewsCardProps {
  badge: string;
  headline: string;
  description: string;
  meta: string;
  imageSrc: string;
}

export default function NewsCard({ badge, headline, description, meta, imageSrc }: NewsCardProps) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white pt-16 px-6 sm:px-8 overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-[#3C2A21]/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 font-sans text-left">
          
          <div className="flex-1 space-y-6 order-2 md:order-1">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#F9F7F2] text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                {badge}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#111111] leading-snug drop-shadow-sm">
                {headline}
              </h3>
            </div>

            <p className="text-gray-800 leading-relaxed text-sm md:text-base font">
              {description}
            </p>

            {/* Technical Footer Meta-text */}
            <div className="pt-4 text-xs font-semibold text-gray-400 tracking-widest uppercase border-t border-stone-200/60">
              {meta}
            </div>
          </div>

          {/* Media Area - Premium Photo Composite */}
          <div className="w-full md:w-[340px] shrink-0 aspect-[4/3] md:aspect-square relative rounded-2xl overflow-hidden border border-stone-200/50 shadow-md order-1 md:order-2">
            <Image
              src={imageSrc} 
              alt={`${badge} - ${headline}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </div>
  );
}