import { motion } from "framer-motion";

const skills = [
  "SEO Writing",
  "Keyword Research",
  "Content Strategy",
  "Storytelling",
  "Editing & Proofreading",
  "Social Media Campaigns",
  "Brand Voice",
  "Topical Clusters",
];

const tools = ["ChatGPT", "Gemini", "Grammarly", "Hemingway", "Duplichecker", "Google Docs", "Search Console", "Surfer SEO"];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface">
      <div className="container-narrow grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Skills & Tools</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight">
            Craft <span className="italic text-accent">+</span> the right toolkit.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A blend of editorial discipline, SEO fundamentals, and modern AI-assisted research —
            so the output is fast without losing quality.
          </p>
        </div>

        <div className="md:col-span-8 space-y-12">
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-muted-foreground">Core Skills</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/85 hover:border-foreground transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-muted-foreground">Tools</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-background px-4 py-4 text-sm text-center text-foreground/85 hover:bg-surface-2 transition-colors"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
