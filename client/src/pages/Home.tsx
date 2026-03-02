import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Features />
        <ContactSection />
      </Layout>
    </>
  );
}
