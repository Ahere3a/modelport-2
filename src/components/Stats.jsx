import React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";

const stats = [
  { label: "Campaigns", value: 32 },
  { label: "Runway Shows", value: 18 },
  { label: "Brands", value: 12 }
];

const AnimatedNumber = ({ target }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.floor(latest).toString()
  );

  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, target, {
        duration: 1.4,
        ease: [0.21, 0.79, 0.26, 0.99]
      });
      return controls.stop;
    }
  }, [inView, motionValue, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
};

function Stats({ setActiveSection }) {
  const sectionRef = React.useRef(null);
  const sectionInView = useInView(sectionRef, {
    margin: "-40% 0px -40% 0px"
  });

  React.useEffect(() => {
    if (sectionInView) setActiveSection("experience");
  }, [sectionInView, setActiveSection]);

  return (
    <section id="experience" ref={sectionRef} className="scroll-mt-28">
      <div className="lux-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="rounded-[2.25rem] border border-white/8 bg-gradient-to-b from-white/5/10 via-white/5/5 to-transparent px-6 py-10 text-center shadow-[0_22px_65px_rgba(0,0,0,0.85)] sm:px-10 sm:py-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/80">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Poised. Precise. Proven on set.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/65 sm:text-base">
            From major commercial launches to intimate editorials, Chantelle
            moves with the quiet confidence of a model who understands pacing,
            presence and story.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-white/8 sm:border-l first:sm:border-l-0"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="font-display text-4xl sm:text-5xl">
                    <AnimatedNumber target={stat.value} />
                    <span className="ml-1 text-gold-soft">+</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
