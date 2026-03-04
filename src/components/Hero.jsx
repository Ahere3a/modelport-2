import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE =
  "/images/WhatsApp_Image_2026-03-03_at_12.47.45__1_-78f68c97-9b33-4862-b01a-438864d3ac34.png";

function Hero({ onViewPortfolio }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.32]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <motion.div
        className="hero-parallax-bg pointer-events-none absolute inset-0"
        style={{
          y,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.96)), url(${HERO_IMAGE})`
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-10 w-full">
        <div className="lux-container flex flex-col gap-10 pt-28 pb-20 sm:pt-32 sm:pb-28 md:flex-row md:items-center">
          <div className="flex-1 space-y-8">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.35em] text-white/60"
            >
              High Fashion Model
            </motion.p>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="block text-white">CHANTELLE</span>
              <span className="mt-4 inline-block bg-gradient-to-r from-gold-soft via-white to-gold-soft bg-clip-text text-2xl font-light uppercase tracking-[0.35em] text-transparent sm:text-[13px]">
                Angel Mwangi
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-xl text-sm text-white/70 sm:text-base"
            >
              Nairobi-born, runway-bred, and editorial-obsessed. Chantelle Angel
              Mwangi brings an unmistakable presence to every frame – from
              precision beauty shots to cinematic campaign stories for brands
              like iPhone Centre Nairobi, Prime Phones, Tech Smart, Home 254,
              Habibi London and Power Focus.
            </motion.p>

            <motion.div
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <button
                onClick={onViewPortfolio}
                className="group inline-flex items-center gap-3 rounded-full border border-gold-soft/70 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft-gold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Portfolio
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold-soft/70">
                  <span className="h-2 w-2 rounded-full bg-gold-soft group-hover:scale-110 group-hover:shadow-soft-gold transition" />
                </span>
              </button>

              <p className="text-xs text-white/55 sm:text-[11px]">
                Editorial • Runway • Campaign
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={onViewPortfolio}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="gold-underline pb-1">Scroll to portfolio</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="h-9 w-[1px] bg-gradient-to-b from-gold-soft/70 to-transparent"
          />
        </div>
      </motion.button>
    </section>
  );
}

export default Hero;
