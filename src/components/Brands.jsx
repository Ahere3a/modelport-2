import React from "react";
import { motion } from "framer-motion";

const brands = [
  "iPhone Centre Nairobi",
  "Prime Phones",
  "Tech Smart",
  "Home 254",
  "Habibi London",
  "Power Focus"
];

function Brands() {
  return (
    <section id="brands" className="scroll-mt-28">
      <div className="lux-container space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/80">
            Selected Collaborations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Trusted by forward-thinking brands.
          </h2>
          <p className="mx-auto max-w-xl text-sm text-white/60 sm:text-base">
            A curated list of partners that value modern, elevated visual
            storytelling.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5/0 via-white/5/5 to-white/5/0 px-6 py-6 text-center"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-soft/0 via-gold-soft/5 to-gold-soft/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative text-xs uppercase tracking-[0.3em] text-white/65 group-hover:text-gold-soft">
                {brand}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
