import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  CalendarCheck,
  MessageCircle,
  FileText,
  Linkedin,
  Instagram,
  ExternalLink,
  Download,
} from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1ELzEXgBR0xpJQ6cERQfmfRc4g0HdLrth/view";
const FORM_URL = "https://forms.gle/7PGQ2Ywjpm9viVc77";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/abhi-solanki?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const INSTAGRAM_URL =
  "https://www.instagram.com/abhi_solanki_1012?igsh=OWZud3Y2YnEyMmg4";
const EMAIL = "abhisolanki9508@gmail.com";
const PHONE_DISPLAY = "+91 98254 06579";
const PHONE_HREF = "tel:+919825406579";

const InfoRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/15 text-accent">
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0">
      <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
        {label}
      </div>
      <div className="mt-1 text-primary-foreground/95 break-words">{children}</div>
    </div>
  </div>
);

const QuickLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="group flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/90 transition-all hover:bg-primary-foreground/10 hover:-translate-y-0.5"
  >
    <Icon className="h-4 w-4 text-accent" />
    <span>{label}</span>
  </a>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-highlight/15 blur-3xl"
      />


      <div className="container-narrow text-primary-foreground">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60"
          >
            Let's Talk
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance"
          >
            Get in <span className="italic text-accent">touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-primary-foreground/70 text-lg leading-relaxed"
          >
            Looking for a content writer for blogs, website copy, or social
            media? Let's connect and create something impactful together.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.03] backdrop-blur p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">
              <InfoRow icon={User} label="Name">
                Abhishek Solanki
              </InfoRow>

              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-accent transition-colors"
                >
                  {EMAIL}
                </a>
              </InfoRow>

              <InfoRow icon={Phone} label="Phone">
                <a
                  href={PHONE_HREF}
                  className="hover:text-accent transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </InfoRow>

              <InfoRow icon={CalendarCheck} label="Availability">
                Available for freelance & retainer projects
              </InfoRow>

              <InfoRow icon={MessageCircle} label="Connect">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>
              </InfoRow>

              <InfoRow icon={FileText} label="Resume">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> View Resume
                </a>
              </InfoRow>
            </div>
          </motion.div>

          {/* Send a Message + Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.03] backdrop-blur p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl">Send a Message</h3>
            <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed">
              Tell me about your brand, goals, and timeline. I'll reply within
              24 hours.
            </p>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-sm font-medium text-accent-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-elevated"
            >
              <ExternalLink className="h-4 w-4" />
              Open Contact Form
            </a>

            <div className="mt-10">
              <h4 className="text-sm font-medium tracking-wide text-primary-foreground/90">
                Quick Links
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <QuickLink href={LINKEDIN_URL} icon={Linkedin} label="LinkedIn" />
                <QuickLink
                  href={INSTAGRAM_URL}
                  icon={Instagram}
                  label="Instagram"
                />
                <QuickLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
                <QuickLink href={RESUME_URL} icon={FileText} label="Resume" />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-sm text-primary-foreground/80">
                Currently accepting new projects
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
