import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Stats from "./components/Stats.jsx";
import Brands from "./components/Brands.jsx";
import Contact from "./components/Contact.jsx";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-gradient-to-r from-gold-soft/90 via-gold-soft to-gold-soft/40"
      style={{ scaleX }}
    />
  );
};

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-rich-black to-black text-white">
      <ScrollProgress />
      <Navbar
        activeSection={activeSection}
        onNavClick={scrollToSection}
        onLogoClick={() => scrollToSection("hero")}
      />
      <AnimatePresence mode="wait">
        {mounted && (
          <PageFade key="main">
            <main className="flex flex-col gap-32 pb-24">
              <Hero onViewPortfolio={() => scrollToSection("portfolio")} />
              <About setActiveSection={setActiveSection} />
              <Portfolio setActiveSection={setActiveSection} />
              <Stats setActiveSection={setActiveSection} />
              <Brands />
              <Contact />
            </main>
          </PageFade>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
