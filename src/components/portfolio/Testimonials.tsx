// import { motion } from "framer-motion";

// const items = [
//   {
//     quote:
//       "Abhishek's blogs do the rare thing — they rank and they actually read well. Our organic traffic on skincare topics nearly doubled within a quarter.",
//     name: "Marketing Lead",
//     role: "D2C Skincare Brand",
//   },
//   {
//     quote:
//       "He understands brand voice quickly and writes copy that sounds like us, not like a template. Easy to work with and consistently on time.",
//     name: "Founder",
//     role: "Health & Wellness Startup",
//   },
//   {
//     quote:
//       "From product pages to Instagram captions, the content felt cohesive and customer-first. Conversions on the refreshed pages went up noticeably.",
//     name: "E-commerce Manager",
//     role: "Beauty Retailer",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-24 md:py-32">
//       <div className="container-narrow">
//         <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kind Words</p>
//         <h2 className="mt-4 font-serif text-4xl md:text-5xl tracking-tight max-w-3xl text-balance">
//           Trusted by brands who care about <span className="italic text-accent">how</span> they sound.
//         </h2>

//         <div className="mt-16 grid gap-6 md:grid-cols-3">
//           {items.map((t, i) => (
//             <motion.figure
//               key={t.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="rounded-2xl border border-border bg-card p-8 flex flex-col"
//             >
//               <span className="font-serif text-5xl leading-none text-accent/70">"</span>
//               <blockquote className="mt-2 text-foreground/85 leading-relaxed">
//                 {t.quote}
//               </blockquote>
//               <figcaption className="mt-8 pt-6 border-t border-border">
//                 <div className="font-medium text-foreground">{t.name}</div>
//                 <div className="text-sm text-muted-foreground">{t.role}</div>
//               </figcaption>
//             </motion.figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
