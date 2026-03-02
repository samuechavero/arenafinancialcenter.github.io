import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";
import { LeadGate } from "@/components/LeadGate";

export default function Home() {
  return (
    <>
      <LeadGate />
      <Layout>
        <Hero />
        <About />
        <Features />
        <ContactSection />
      </Layout>
    </>
  );
}
