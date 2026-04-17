import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { VSLSection } from "@/components/VSLSection";

export default function Home() {
  const [hasAccess, setHasAccess] = useState(() => {
    return Boolean(localStorage.getItem("arena_lead_access"));
  });

  return (
    <>
      {/* Bloque 1: Modal de Captura — aparece sobre todo el contenido */}
      <LeadCaptureModal onAccessGranted={() => setHasAccess(true)} />

      <Layout>
        {/* Bloque 2 & 3: Sección VSL + Libro — visible tras el modal */}
        <VSLSection />

        {/* Contenido original de la página */}
        <Hero />
        <About />
        <Features />
        <ContactSection />
      </Layout>
    </>
  );
}
