import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ABOUT_IMAGE =
  "/images/WhatsApp_Image_2026-03-03_at_12.47.42__1_-f29ceba3-2168-4b9d-8171-842e983b6c40.png";

function About({ setActiveSection }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) setActiveSection("about");
  }, [inView, setActiveSection]);

  return (
    <section id="about" ref={ref} className="scroll-mt-28">
      <div className="lux-container grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="relative order-2 md:order-1"
        >
          <div className="gold-gradient-border relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-white/0 to-white/5/0">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-soft/15 via-transparent to-transparent mix-blend-soft-light" />
            <img
              src={ABOUT_IMAGE}
              alt="Chantelle Angel Mwangi editorial portrait"
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="order-1 space-y-6 md:order-2"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/80">
            About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            A face built for{" "}
            <span className="gold-underline">editorials & campaigns</span>.
          </h2>
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            Chantelle Angel Mwangi is a Nairobi-based high-fashion model whose
            work moves effortlessly between runway, editorial and commercial
            campaigns. Her signature look balances softness with precision – a
            strong gaze, sculpted features, and an instinctive understanding of
            light, movement and negative space.
          </p>
          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
            She has partnered with forward-thinking brands such as iPhone Centre
            Nairobi, Prime Phones, Tech Smart, Home 254, Habibi London and Power
            Focus, bringing a modern, global sensibility to every frame while
            staying rooted in Nairobi&apos;s creative energy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
