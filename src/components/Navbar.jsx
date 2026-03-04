import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "brands", label: "Brands" },
  { id: "contact", label: "Contact" }
];

function Navbar({ activeSection, onNavClick, onLogoClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="nav-blur lux-container mt-4 flex items-center justify-between rounded-full border border-white/8 bg-black/30 px-5 py-3 shadow-lg shadow-black/40"
      >
        <button
          onClick={onLogoClick}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
        >
          <span className="h-5 w-5 rounded-full border border-gold-soft/60 bg-gradient-to-br from-gold-soft/30 to-transparent group-hover:from-gold-soft/60 transition-colors" />
          <span className="font-display text-[11px] group-hover:text-white">
            Chantelle Angel Mwangi
          </span>
        </button>

        <div className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.25em] text-white/55 sm:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`relative pb-1 transition-colors ${
                  isActive ? "text-gold-soft" : "hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-gold-soft"
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
