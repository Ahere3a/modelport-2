import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="lux-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5/15 via-white/5/5 to-transparent px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.9)] sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:px-10 sm:py-12"
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/80">
              Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              For bookings & creative collaborations.
            </h2>
            <p className="max-w-md text-sm text-white/65 sm:text-base">
              For editorial, runway and campaign bookings, please share as many
              details as possible about the concept, location, dates and usage.
            </p>

            <div className="space-y-2 text-sm text-white/70">
              <p className="uppercase tracking-[0.2em] text-xs text-white/55">
                Direct
              </p>
              <a
                href="tel:0743654441"
                className="block text-sm text-white/70 hover:text-white"
              >
                Phone · 0743 654 441
              </a>
              <a
                href="mailto:Channangel11@gmail.com"
                className="block text-sm text-gold-soft hover:text-gold-soft/80"
              >
                Email · Channangel11@gmail.com
              </a>
              <a
                href="https://www.instagram.com/___.chann_?igsh=MWJrZXQzdmlic2U0bQ=="
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-white/70 hover:text-white"
              >
                Instagram · @___.chann_
              </a>
              <a
                href="https://www.tiktok.com/@_chan.ntelle?_r=1&_t=ZS-94PF78RUORe"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-white/70 hover:text-white"
              >
                TikTok · @_chan.ntelle
              </a>
            </div>
          </div>

          <form className="space-y-4 text-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] uppercase tracking-[0.25em] text-white/60"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-full border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-soft focus:bg-black/70"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] uppercase tracking-[0.25em] text-white/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-full border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-soft focus:bg-black/70"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project"
                className="block text-[11px] uppercase tracking-[0.25em] text-white/60"
              >
                Project Type
              </label>
              <input
                id="project"
                type="text"
                className="mt-2 w-full rounded-full border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition focus:border-gold-soft focus:bg-black/70"
                placeholder="Editorial / Runway / Campaign / Lookbook"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] uppercase tracking-[0.25em] text-white/60"
              >
                Details
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-gold-soft focus:bg-black/70"
                placeholder="Share dates, location, mood references and usage."
              />
            </div>

            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-gold-soft/80 bg-white/5 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white shadow-soft-gold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Send Request
            </button>
          </form>
        </motion.div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Chantelle Angel Mwangi. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
