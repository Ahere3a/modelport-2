import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const images = [
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.47.43__2_-d46f57b7-8d1e-45e0-ba7a-18c51278091b.png",
    label: "Editorial"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.47.43__1_-08e068d2-8f36-411b-91b6-f0f69f258201.png",
    label: "Editorial"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.47.43__3_-8b59f2ee-6a56-407b-84b9-12258fda461d.png",
    label: "Campaign"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.47.46-c381c786-9de5-4c65-ae41-e49c5f7daf2a.png",
    label: "Runway"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.55.26-f6edf480-c6b5-4d67-814f-205e3cf3271d.png",
    label: "Lifestyle"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.55.26-182b02aa-e8dd-430f-8e13-d98e9ae0705d.png",
    label: "Campaign"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_12.55.27-87805f48-d4cc-42ce-b001-8cdc887249f7.png",
    label: "Campaign"
  },
  {
    src: "/images/WhatsApp_Image_2026-03-03_at_13.13.25-30c188c8-653e-4ac2-b9cc-a151fdd6a9ef.png",
    label: "Beauty"
  }
];

function Portfolio({ setActiveSection }) {
  const [selected, setSelected] = useState(null);
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (inView) setActiveSection("portfolio");
  }, [inView, setActiveSection]);

  return (
    <section id="portfolio" ref={ref} className="scroll-mt-28">
      <div className="lux-container space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/80">
              Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Curated editorial & campaign stories.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-white/60 sm:text-sm">
            A selection of work across editorial beauty, commercial campaigns,
            and runway moments.
          </p>
        </div>

        <div className="masonry-column columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <motion.button
              key={image.src}
              onClick={() => setSelected(image)}
              className="masonry-item group mb-4 block w-full overflow-hidden rounded-2xl border border-white/8 bg-white/5/0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={`Chantelle Angel Mwangi ${image.label.toLowerCase()} work`}
                  loading="lazy"
                  className="w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-black/30 text-[10px]">
                    {index + 1}
                  </span>
                  <span>{image.label}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black/80"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={`Chantelle Angel Mwangi ${selected.label.toLowerCase()} shot`}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/70">
                <span>{selected.label}</span>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-white/30 px-3 py-1 text-[10px] tracking-[0.25em] text-white/60 hover:border-white hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
