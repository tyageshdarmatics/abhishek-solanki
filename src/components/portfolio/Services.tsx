import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "SEO Blog Writing",
    desc: "Long-form blogs that rank — built on keyword research, search intent, and on-page best practices.",
  },
  {
    n: "02",
    title: "Website Copywriting",
    desc: "Homepage, landing, and product pages that turn visitors into customers with clear, persuasive messaging.",
  },
  {
    n: "03",
    title: "Social Media Content",
    desc: "Captions, carousels, and campaign copy that fit your brand voice and stop the scroll.",
  },
  {
    n: "04",
    title: "Product Descriptions",
    desc: "Benefit-driven descriptions structured for clarity, SEO, and faster purchase decisions.",
  },
  {
    n: "05",
    title: "Email Writing",
    desc: "Newsletters and sequences that nurture trust and convert — without the spammy tone.",
  },
  {
    n: "06",
    title: "Editing & Strategy",
    desc: "Editorial polish, content audits, and topical clusters mapped to your business goals.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container-narrow">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-2xl text-balance">
              Content that earns attention <span className="italic text-accent">and</span> trust.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Engagements built around your goals — whether you need consistent SEO output or a
            single high-stakes page that converts.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="group relative bg-background p-8 md:p-10 transition-colors hover:bg-surface-2 md:[&:nth-child(3n+1)]:border-l-0"
              style={{
                gridColumn: "auto",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-muted-foreground">{s.n}</span>
                <span className="text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #services .grid > div { grid-column: span 4; }
        }
      `}</style>
    </section>
  );
};

export default Services;
