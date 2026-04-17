import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface LeadCaptureModalProps {
  onAccessGranted: () => void;
}

export function LeadCaptureModal({ onAccessGranted }: LeadCaptureModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasAccess = localStorage.getItem("arena_lead_access");
    if (!hasAccess) {
      // Pequeño delay para efecto de entrada dramático
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      onAccessGranted();
    }
  }, [onAccessGranted]);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: InsertLead) => {
    // ── Validación básica frontend ──
    if (!data.name.trim() || !data.phone.trim()) return;

    try {
      // ── Envío a Supabase (Insert) ──
      // Se ignora el resultado del error para permitir que el funnel siga fluyendo
      await supabase
        .from('prospects')
        .insert([{ 
          full_name: data.name, 
          phone: data.phone 
        }]);
    } catch (error) {
      console.error("Supabase Error (Silent):", error);
    } finally {
      // ── Transición de la Interfaz (Línea Recta) ──
      // Se ejecuta independientemente del resultado de la petición
      localStorage.setItem("arena_lead_access", "true");

      // Fire Meta Pixel Lead event si está disponible
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      // Cerrar modal y conceder acceso
      setIsVisible(false);
      setTimeout(() => {
        onAccessGranted();
        toast({
          title: "¡Acceso desbloqueado! 🎉",
          description: "Bienvenido a Arena Financial Center.",
        });
      }, 500);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="lead-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(17, 24, 39, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <motion.div
            key="lead-modal-card"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundColor: "#F3F4F6",
              borderRadius: "1.25rem",
              padding: "2.5rem 2rem",
              width: "100%",
              maxWidth: "440px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.35), 0 8px 20px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #2F7A59, #3da876)",
              }}
            />

            {/* Lock icon badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#2F7A59",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(47,122,89,0.4)",
                }}
              >
                <Play style={{ color: "white", width: "22px", height: "22px", fill: "white" }} />
              </div>
            </div>

            {/* Title */}
            <h2
              style={{
                color: "#111827",
                fontSize: "1.6rem",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
                fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              }}
            >
              Hay un video especial para ti.
            </h2>

            {/* Subtitle */}
            <p
              style={{
                color: "#4B5563",
                fontSize: "0.95rem",
                textAlign: "center",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
              }}
            >
              Descubre la estrategia de crecimiento patrimonial que el sistema tradicional ignora.{" "}
              <strong style={{ color: "#111827" }}>
                Ingresa tus datos para desbloquear tu acceso inmediato.
              </strong>
            </p>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Campo Nombre */}
              <div>
                <label
                  htmlFor="lead-name"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Nombre Completo
                </label>
                <input
                  id="lead-name"
                  type="text"
                  placeholder="Tu nombre aquí"
                  {...form.register("name")}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.6rem",
                    border: "1.5px solid #D1D5DB",
                    backgroundColor: "white",
                    fontSize: "0.95rem",
                    color: "#111827",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2F7A59")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                />
                {form.formState.errors.name && (
                  <p style={{ color: "#EF4444", fontSize: "0.8rem", marginTop: "0.3rem" }}>
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Campo Teléfono */}
              <div>
                <label
                  htmlFor="lead-phone"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Teléfono Móvil
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  placeholder="Ej: 832-000-0000"
                  {...form.register("phone")}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.6rem",
                    border: "1.5px solid #D1D5DB",
                    backgroundColor: "white",
                    fontSize: "0.95rem",
                    color: "#111827",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2F7A59")}
                  onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
                />
                {form.formState.errors.phone && (
                  <p style={{ color: "#EF4444", fontSize: "0.8rem", marginTop: "0.3rem" }}>
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                disabled={form.formState.isSubmitting}
                style={{
                  marginTop: "0.5rem",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  backgroundColor: form.formState.isSubmitting ? "#4a9a73" : "#2F7A59",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: form.formState.isSubmitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 6px 24px rgba(47,122,89,0.4)",
                  transition: "transform 0.15s, box-shadow 0.15s, background-color 0.2s",
                  fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                }}
                onMouseEnter={(e) => {
                  if (!form.formState.isSubmitting) {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 30px rgba(47,122,89,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(47,122,89,0.4)";
                }}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 style={{ width: "18px", height: "18px", animation: "spin 1s linear infinite" }} />
                    Desbloqueando...
                  </>
                ) : (
                  <>
                    <Play style={{ width: "18px", height: "18px", fill: "white" }} />
                    VER EL VIDEO
                  </>
                )}
              </button>
            </form>

            {/* Trust badge */}
            <p
              style={{
                marginTop: "1.25rem",
                textAlign: "center",
                fontSize: "0.78rem",
                color: "#9CA3AF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
              }}
            >
              <Lock style={{ width: "12px", height: "12px" }} />
              Tu información es 100% privada y segura. Sin spam.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
