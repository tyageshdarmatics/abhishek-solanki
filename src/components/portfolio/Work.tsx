import { motion } from "framer-motion";

const samples = [
  {
    type: "Blog",
    title: "Why You Need A Silicone SPF Gel For All-Day Body Sunscreen Protection",
    desc: "A modern take on body sunscreens — velvet-matte finish, sweat resistance, and acne-friendly formulas tailored for Indian skin types.",
    link: "https://dermatics.in/blogs/news/%E2%9C%A8-why-you-need-a-silicone-spf-gel-for-all-day-body-sunscreen-protection",
  },
  {
    type: "Blog",
    title: "Is Ginger Good for Hair? Benefits, Uses, Side Effects & Science",
    desc: "An evidence-led deep-dive into ginger for scalp health, with honest expectations and practical safety guidance.",
    link: "https://dermatics.in/blogs/news/is-ginger-good-for-hair",
  },
  {
    type: "Product Description",
    title: "Follihair Tablet — Advanced Nutritional Support for Stronger Hair",
    desc: "Full product page: key benefits, how-to-use, ingredients, safety, and routine pairing — written to inform and convert.",
    link: "https://dermatics.in/products/follihair-hair-tablets-30-tablets",
  },
  {
    type: "Instagram Post",
    title: "Your skin doesn't improve with trends — it improves with routine.",
    desc: "Short-form social copy built around the Cleanse · Treat · Protect · Hydrate framework, with dermatologist-backed positioning.",
    link: "https://www.instagram.com/p/DWfzmq6mfuQ/",
  },
  {
    type: "SEO Blog",
    title: "The Modern Routine for Sensitive, Acne-Prone Skin",
    desc: "Topical cluster piece designed to capture intent-rich queries and link out to product pillars across the catalog.",
    link: "#",
  },
  {
    type: "Brand Copy",
    title: "Dermatics India — Category Page Refresh",
    desc: "Tone-of-voice rewrite balancing clinical credibility with warm, customer-first language.",
    link: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-2xl text-balance">
              A few pieces I'm proud of.
            </h2>
          </div>
          <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground underline underline-offset-4">
            Request full portfolio →
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {samples.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.link}
              target={s.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.06 }}
              className="group relative block rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.type}
                </span>
                <span className="text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl leading-snug tracking-tight text-balance">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <div className="mt-8 hairline pt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Published · Dermatics India</span>
                <span className="font-serif italic text-foreground/70 group-hover:text-accent transition-colors">Read sample</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
