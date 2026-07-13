
"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Mail, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/app/component/lib/animations";

const content = {
  en: {
    formTitle: "Send Trade Inquiry",
    fullName: "Full Name",
    companyName: "Company Name",
    email: "Email",
    phone: "Phone",
    commodityOfInterest: "Commodity of Interest",
    cocoa: "Cocoa",
    cashew: "Cashew",
    timber: "Timber",
    volume: "Volume Requirement",
    message: "Tell us about your requirements...",
    submit: "Send Trade Inquiry",
    contactInfo: "Contact Information",
    emailLabel: "Email",
    officeLabel: "Office",
    responseTimeLabel: "Response Time",
    responseTime: "Our team responds within 24–48 hours.",
    trustedPartner: "Trusted Trade Partner",
    trustBody: "GCS maintains the highest standards of transparency and compliance in all trade operations. Your inquiry is handled with full confidentiality.",
  },
  fr: {
    formTitle: "Envoyer une Demande Commerciale",
    fullName: "Nom Complet",
    companyName: "Nom de l'Entreprise",
    email: "E-mail",
    phone: "Téléphone",
    commodityOfInterest: "Matière Première d'Intérêt",
    cocoa: "Cacao",
    cashew: "Noix de Cajou",
    timber: "Bois",
    volume: "Volume Requis",
    message: "Parlez-nous de vos besoins...",
    submit: "Envoyer la Demande Commerciale",
    contactInfo: "Coordonnées",
    emailLabel: "E-mail",
    officeLabel: "Bureau",
    responseTimeLabel: "Délai de Réponse",
    responseTime: "Notre équipe répond sous 24 à 48 heures.",
    trustedPartner: "Partenaire Commercial de Confiance",
    trustBody: "GCS maintient les normes les plus élevées de transparence et de conformité dans toutes ses opérations commerciales. Votre demande est traitée en toute confidentialité.",
  },
};

export default function ContactForm() {
  const locale = useLocale() as "en" | "fr";
  const t = content[locale];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-[#3C2A21] mb-8">{t.formTitle}</h2>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="7404713c-1c98-4262-95d4-00cbf55bfa4a" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t.fullName}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-gray-900"
                />
                <input 
                  type="text" 
                  name="company" 
                  placeholder={t.companyName}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder={t.email}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-gray-900"
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder={t.phone}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select 
                  name="commodity" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all bg-white text-gray-900"
                >
                  <option value="" className="text-gray-400">{t.commodityOfInterest}</option>
                  <option value="cocoa">{t.cocoa}</option>
                  <option value="cashew">{t.cashew}</option>
                  <option value="timber">{t.timber}</option>
                </select>
                <input 
                  type="text" 
                  name="volume" 
                  placeholder={t.volume}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-gray-900"
                />
              </div>

              <textarea 
                name="message" 
                rows={5} 
                placeholder={t.message}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] outline-none transition-all resize-none text-gray-900"
              ></textarea>

              <button type="submit" 
                className="flex items-center gap-2 bg-[#B8962F] hover:bg-[#3C2A21] text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {t.submit}
              </button>
            </form>
          </motion.div>

             <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold text-[#3C2A21] mb-6">{t.contactInfo}</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-[#D4AF37] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#3C2A21]">{t.emailLabel}</p>
                    <a href="mailto:sales@gaboncs-co.com" className="text-gray-500 hover:text-[#D4AF37]">sales@gaboncs-co.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#D4AF37] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#3C2A21]">{t.officeLabel}</p>
                    <p className="text-gray-500 italic">Immeuble Dumez BP2326<br />Libreville, Gabon</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#D4AF37] shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#3C2A21]">{t.responseTimeLabel}</p>
                    <p className="text-gray-500">{t.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST BOX */}
            <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100">
              <div className="flex items-center gap-2 mb-4 text-[#B8962F]">
                <ShieldCheck size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">{t.trustedPartner}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t.trustBody}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
