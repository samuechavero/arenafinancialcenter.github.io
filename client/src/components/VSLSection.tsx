import { motion } from "framer-motion";
import hustleBookImg from "../assets/hustle-book-3d.png";
import houstonSkyline from "../assets/houston-skyline-custom.jpg";
import isidroVideo from "../assets/Isidroperez.mp4";
import hustlePdf from "../assets/el-sistema-hustle.pdf";

export function VSLSection() {
  return (
    /* Contenedor Unificado con fondo Houston Skyline */
    <div style={{ position: "relative", overflow: "hidden" }}>

      {/* ── Imagen de fondo ── */}
      <img
        src={houstonSkyline}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* ── Overlay oscuro 58% ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#111827",
          opacity: 0.58,
          zIndex: 1,
        }}
      />

      {/* ─────────────────────────────────────────────
          BLOQUE 2: Video VSL
      ───────────────────────────────────────────── */}
      <section
        id="vsl-video"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "4.5rem 1rem 3rem",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Título principal con urgencia */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.45rem, 3.8vw, 2.15rem)",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.3,
              marginBottom: "0.6rem",
              fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            Accede a un asesoramiento gratuito de riqueza con{" "}
            <span style={{ color: "#4ade80" }}>Isidro Perez</span>{" "}
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(239,68,68,0.15)",
                color: "#FCA5A5",
                fontSize: "0.7em",
                fontWeight: 700,
                padding: "0.15em 0.6em",
                borderRadius: "999px",
                border: "1px solid rgba(239,68,68,0.35)",
                verticalAlign: "middle",
                marginLeft: "0.25rem",
                letterSpacing: "0.04em",
              }}
            >
              ⏱ TIEMPO LIMITADO
            </span>
          </motion.h2>

          {/* Sub-hook de urgencia */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginBottom: "1.75rem",
              fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            }}
          >
            Descubre en este video la estrategia que cambiará el futuro financiero de tu familia.
          </motion.p>

          {/* Video Container 16:9 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.4), 0 8px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)",
              backgroundColor: "#0d0d1a",
              aspectRatio: "16 / 9",
            }}
          >
            <video
              src={isidroVideo}
              controls
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                backgroundColor: "#000",
              }}
            >
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </motion.div>

          {/* Sub-caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              marginTop: "1rem",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            }}
          >
            🔒 Contenido exclusivo. Mira este video completo antes de continuar.
          </motion.p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          BLOQUE 3: Oferta del Libro
      ───────────────────────────────────────────── */}
      <section
        id="hustle-book"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "4rem 1rem 5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Columna Izquierda: Libro 3D */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.65))",
                transition: "transform 0.3s ease, filter 0.3s ease",
                backgroundColor: "transparent",
                borderRadius: "0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "rotate(-2deg) scale(1.04)";
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 28px 55px rgba(0,0,0,0.8))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "rotate(0) scale(1)";
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 20px 50px rgba(0,0,0,0.65))";
              }}
            >
              <img
                src={hustleBookImg}
                alt="El Sistema Hustle - Libro de estrategias para construir riqueza"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Badge descarga gratuita */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(74,222,128,0.15)",
                  color: "#4ade80",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "0.35rem 0.85rem",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  border: "1px solid rgba(74,222,128,0.3)",
                  fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                }}
              >
                Descarga GRATUITA
              </span>
            </div>

            {/* Título del libro */}
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                margin: 0,
                fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              El Sistema{" "}
              <span style={{ color: "#4ade80" }}>Hustle</span>
            </h2>

            {/* Quote */}
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                margin: 0,
                lineHeight: 1.6,
                borderLeft: "3px solid #4ade80",
                paddingLeft: "1rem",
                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
              }}
            >
              "Si quieres ser millonario, debes aprender a pensar como uno."
            </p>

            {/* Viñetas */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              {[
                "Las 10 estrategias exactas para blindar tu dinero.",
                "Cómo planes estructurados hacen de personas comunes, gente millonaria.",
                "Creación de capital ininterrumpido sin riesgo de mercado.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.65rem",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                  }}
                >
                  <span
                    style={{
                      color: "#4ade80",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      lineHeight: 1.4,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Botón CTA */}
            <motion.a
              href={hustlePdf}
              download="el-sistema-hustle.pdf"
              whileHover={{ y: -3, boxShadow: "0 14px 40px rgba(47,122,89,0.65)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginTop: "0.5rem",
                padding: "1rem 1.5rem",
                width: "100%",
                borderRadius: "0.75rem",
                backgroundColor: "#2F7A59",
                color: "white",
                fontSize: "1rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                boxShadow: "0 6px 24px rgba(47,122,89,0.5)",
                transition: "background-color 0.2s",
                fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#267a52")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2F7A59")
              }
            >
              📘 DESCARGAR MI LIBRO AHORA
            </motion.a>

            {/* Micro trust signal */}
            <p
              style={{
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.4)",
                textAlign: "center",
                margin: 0,
                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
              }}
            >
              Sin costo. Sin tarjeta de crédito. Acceso instantáneo.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
