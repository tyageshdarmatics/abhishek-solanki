import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-narrow grid gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            Bridging expertise and human connection.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8 md:pt-3"
        >
          <p className="text-lg leading-relaxed text-foreground/85">
            As a Content Writer at <span className="font-medium">Dermatics India</span>, I craft
            educational narratives for skincare and hair care — from high-ranking blogs to
            scroll-stopping social posts. My work is rooted in a strong foundation of SEO and
            multi-channel digital advertising, so every page reaches its full potential.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I write in a conversational yet professional voice that speaks directly to the
            reader. By blending AI-assisted efficiency with consumer psychology, I help brands
            sound authentic, expert, and trustworthy — the kind of voice people actually
            return to.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["SEO-first writing", "Brand storytelling", "Conversion copy", "Editorial blogs", "Social content", "AI-assisted research"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs text-foreground/80 text-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
