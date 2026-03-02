import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Landmark, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "Educación Financiera Gratuita",
      description: "Talleres y seminarios diseñados para enseñarte los fundamentos del dinero, el ahorro y la inversión sin costo alguno.",
      icon: BookOpen,
      delay: 0.1
    },
    {
      title: "Construcción de Riqueza",
      description: "Estrategias prácticas y personalizadas para hacer crecer tu patrimonio y proteger el futuro de tu familia.",
      icon: TrendingUp,
      delay: 0.2
    },
    {
      title: "Planificación para el Retiro",
      description: "Asegura tus años dorados entendiendo cómo funcionan los vehículos de retiro y el interés compuesto.",
      icon: Landmark,
      delay: 0.3
    },
    {
      title: "Protección Familiar",
      description: "Aprende cómo salvaguardar tu patrimonio contra imprevistos con las herramientas financieras adecuadas.",
      icon: Shield,
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
          >
            Servicios y Beneficios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Transformamos conceptos complejos en estrategias simples que puedes aplicar hoy mismo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-display text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
