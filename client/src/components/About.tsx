import { motion } from "framer-motion";
import wsbLogoImg from "@assets/WSB_professional_1772475416019.png";
import { ShieldCheck, Target, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Nuestra Misión: <span className="text-primary">Tu Independencia</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Arena Financial Center, estamos comprometidos con una causa mayor. Creemos firmemente que la educación financiera no debería ser un privilegio para pocos, sino un derecho para todos.
            </p>

            <div className="bg-secondary/40 p-6 rounded-2xl border border-secondary">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Parte de un Movimiento Nacional
              </h3>
              <p className="text-muted-foreground">
                Estamos orgullosos de ser parte de la misión de <strong className="text-foreground">World System Builder</strong> y la <strong className="text-foreground">National Financial Literacy Campaign</strong>, trabajando incansablemente para educar a 30 millones de familias.
              </p>
              <div className="mt-6">
                <img src={wsbLogoImg} alt="World System Builder" className="h-14 w-auto drop-shadow-sm" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl">Para Todas las Familias</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sin importar tu origen o ingresos actuales, te brindamos las herramientas para mejorar tus finanzas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow flex flex-col gap-4 sm:translate-y-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl">Entorno de Confianza</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nuestros profesionales certificados en Houston te guían paso a paso de manera transparente.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
