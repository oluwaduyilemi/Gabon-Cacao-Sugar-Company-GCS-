"use client";

import ContactForm from "../../_components/ContactForm";
import ContactHero from "../../_components/ContactHero";

export default function ContactPage() {
  return (
      <main className="bg-white pt-15 pb-10">
        <ContactHero />
        <ContactForm/>
      </main>
  );
}