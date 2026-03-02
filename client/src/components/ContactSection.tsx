import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactMessageInput } from "@shared/routes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone } from "lucide-react";

export function ContactSection() {
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(api.contactMessages.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactMessageInput) => {
    const text = `Hola, mi nombre es ${data.name}. \n${data.phone ? `Mi teléfono es ${data.phone}.\n` : ''}Mensaje: ${data.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/18328901102?text=${encodedText}`, '_blank');
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Visítanos o Contáctanos
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Estamos listos para guiarte en tu viaje hacia la independencia financiera. Déjanos tus datos o visítanos en nuestra oficina en Houston.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dirección</h4>
                  <p className="text-muted-foreground mt-1">
                    Arena Financial Center<br />
                    7324 Southwest Fwy Ste. 702<br />
                    Houston, TX 77074
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teléfono</h4>
                  <p className="text-muted-foreground mt-1">Llámanos para agendar tu cita.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Envíanos un Mensaje</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej. Juan Pérez" className="bg-white border-slate-200 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-slate-700">Teléfono (opcional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" className="bg-white border-slate-200 focus-visible:ring-primary h-12" {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="¿En qué podemos ayudarte?" 
                          className="bg-white border-slate-200 focus-visible:ring-primary min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-white font-bold bg-[#25D366] hover:bg-[#128C7E]"
                >
                  Enviar por WhatsApp
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-[450px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.6187188306517!2d-95.52075682477637!3d29.70183207509789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3004fae002d%3A0xb0ef4c4af376e2de!2sArena%20Financial%20Center!5e0!3m2!1ses!2sus!4v1772493043947!5m2!1ses!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
