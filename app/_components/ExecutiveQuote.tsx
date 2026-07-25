"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function ExecutiveQuote() {
  return (
    <section className="w-full bg-[#3C2A21] text-[#F9F7F2] py-14 px-6 md:px-12 border-y border-[#331B10]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <div className="lg:col-span-4 relative w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] rounded-lg overflow-hidden border border-[#3D2216] shadow-xl group">
          <Image
            src="/images/reo-per.jpeg" 
            alt="Charles-Daniel Tchen — President & Founder"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#100603]/90 via-transparent to-transparent" />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-4 left-4 space-y-0.5">
            <h3 className="text-lg font-serif font-bold text-white tracking-wide">
              Charles-Daniel Tchen
            </h3>
            <p className="text-stone-400 text-xs font-sans">
              President & Founder
            </p>
          </div>
        </div>

        {/* Right Column: Balanced Quote Content */}
        <div className="lg:col-span-8 space-y-5 font-sans">
          
          {/* Gold Quotation Icon */}
          <div className="text-[#D4AF37]">
            <Quote className="w-8 h-8 rotate-180 opacity-90 stroke-[1.5]" />
          </div>

          {/* Scaled-Down Quote Body */}
          <blockquote className="text-lg md:text-xl font-serif leading-relaxed text-[#F5EFE6] font-normal tracking-wide">
            At Gabon Cacao & Sugar Company, we are driven by integrity, operational excellence, and a long-term commitment to creating value across the cocoa supply chain
          </blockquote>

          {/* Signature Line */}
          <div className="pt-4 border-t border-[#331B10] flex items-center gap-3">
            <div className="w-6 h-[1px] bg-[#D4AF37]" />
            <div>
              <h4 className="text-base font-serif font-bold text-[#F5EFE6] tracking-wide">
                Charles-Daniel Tchen
              </h4>
              <p className="text-[11px] font-sans text-stone-400 tracking-wider">
                President & Founder, Gabon Cacao & Sugar Company
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}