import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/KhmKovSpV9uL2q8v7R82yf?mode=hqctcli";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Dark Wash for Contrast */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        {/* landing page hero houston skyline modern abstract architecture */}
        <img 
          src="https://pixabay.com/get/g6f831472d6137935f5ab13ea0745f1fdde49ddbd2e8ecbf1f9fabde9d96816a3ffbaa28e87ed3c6d53887048021ee20f3ac65ec316fcacbf403ffaca22ee00ed_1280.jpg" 
          alt="Houston Skyline Architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground font-medium text-sm mb-4">
            Educación Financiera en Houston, TX
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-tight">
            Tu Futuro Financiero <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">
              Comienza en Houston
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Únete al movimiento global: más de 30 millones de familias formadas con educación financiera gratuita. Sé parte del cambio en <span className="text-white font-semibold">Arena Financial Center</span>.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-[#25D366] hover:bg-[#20bd5c] text-white text-lg h-16 px-8 rounded-2xl shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all border-none w-full sm:w-auto"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6 mr-3" />
                Únete a nuestro grupo de WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild 
              className="h-16 px-8 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white text-lg transition-all w-full sm:w-auto"
            >
              <a href="#about">
                Conocer más
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
