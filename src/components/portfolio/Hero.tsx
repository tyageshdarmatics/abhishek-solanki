import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Available for new projects · Surat, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance"
        >
          Words that build
          <br />
          <span className="italic font-light text-accent">trust</span>
          <span className="text-muted-foreground">,</span> drive growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
        >
          I'm <span className="text-foreground font-medium">Abhishek Solanki</span> — a content writer
          crafting SEO-optimized blogs, website copy, and social content that turns expertise
          into authority and readers into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
          >
            View my work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm text-foreground transition-colors hover:bg-muted"
          >
            Let's talk
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-border pt-10"
        >
          {[
            { k: "Niches", v: "Tech · Health · Finance" },
            { k: "Specialty", v: "SEO + Storytelling" },
            { k: "Currently", v: "Dermatics India" },
            { k: "Tone", v: "Human · Trustworthy" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-serif text-lg text-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
