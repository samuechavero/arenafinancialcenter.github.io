import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/Arena_Financial_Center_1772475413908.png";
import wsbLogoImg from "@assets/WSB_professional_1772475416019.png";

const WHATSAPP_LINK = "https://chat.whatsapp.com/KhmKovSpV9uL2q8v7R82yf?mode=hqctcli";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Arena Financial Center Logo" className="h-12 w-auto" />
            <span className={`font-display font-bold text-xl hidden sm:block ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`}>
              Arena Financial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white/90"}`}>
              Nosotros
            </a>
            <a href="#features" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white/90"}`}>
              Servicios
            </a>
            <a href="#contact" className={`font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white/90"}`}>
              Contacto
            </a>
            <Button asChild className="bg-[#25D366] hover:bg-[#20bd5c] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border-none">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Unirse a WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-slate-50 rounded-md">
              Nosotros
            </a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-slate-50 rounded-md">
              Servicios
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-slate-50 rounded-md">
              Contacto
            </a>
            <div className="mt-4 px-3">
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#20bd5c] text-white">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Unirse a WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <img src={logoImg} alt="Arena Financial Center Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed max-w-sm">
              Formando familias y construyendo riqueza a través de la educación financiera gratuita. Únete al movimiento.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Ubicación</h4>
            <div className="space-y-2 text-sm">
              <p>Arena Financial Center</p>
              <p>7324 Southwest Fwy Ste. 702</p>
              <p>Houston, TX 77074</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-lg">Alianzas</h4>
            <div className="bg-white/5 p-4 rounded-xl inline-block border border-white/10">
              <img src={wsbLogoImg} alt="World System Builder" className="h-12 w-auto" />
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Arena Financial Center es parte de la misión de World System Builder y la National Financial Literacy Campaign.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Arena Financial Center. Todos los derechos reservados.
          </p>
          <p className="max-w-xl">
            Avisos Legales: Este sitio opera bajo los lineamientos de marca de WFG/WSB. La información proporcionada es con fines educativos y no constituye asesoramiento financiero o legal directo.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center justify-center"
      aria-label="Contáctanos por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
