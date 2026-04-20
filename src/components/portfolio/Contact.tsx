import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-ink" />
      <div aria-hidden className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl -z-10" />

      <div className="container-narrow text-primary-foreground">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 font-serif text-5xl md:text-7xl leading-[1] tracking-tight text-balance max-w-4xl"
        >
          Let's build something <span className="italic text-accent">impactful</span> together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl text-primary-foreground/70 text-lg leading-relaxed"
        >
          Open for collaborations, retainers, and one-off content projects.
          Tell me about your brand — I'll reply within 24 hours.
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-2xl">
          <a
            href="mailto:abhisolanki9508@gmail.com"
            className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6 transition-all hover:bg-primary-foreground/10 hover:-translate-y-0.5"
          >
            <div className="text-xs uppercase tracking-widest text-primary-foreground/50">Email</div>
            <div className="mt-2 font-serif text-xl break-all">abhisolanki9508@gmail.com</div>
            <div className="mt-3 text-sm text-primary-foreground/60 inline-flex items-center gap-2">
              Send a message <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abhi-solanki/"
            target="_blank"
            rel="noreferrer noopener"
            className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-6 transition-all hover:bg-primary-foreground/10 hover:-translate-y-0.5"
          >
            <div className="text-xs uppercase tracking-widest text-primary-foreground/50">LinkedIn</div>
            <div className="mt-2 font-serif text-xl">/in/abhi-solanki</div>
            <div className="mt-3 text-sm text-primary-foreground/60 inline-flex items-center gap-2">
              Connect with me <span className="transition-transform group-hover:translate-x-1">↗</span>
            </div>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href="mailto:abhisolanki9508@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm text-primary transition-transform hover:-translate-y-0.5"
          >
            Let's work together →
          </a>
          <a
            href="tel:+919825406579"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm text-primary-foreground/90 hover:bg-primary-foreground/10"
          >
            +91 98254 06579
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
