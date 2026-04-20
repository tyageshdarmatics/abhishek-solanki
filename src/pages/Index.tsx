import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Work from "@/components/portfolio/Work";
import Skills from "@/components/portfolio/Skills";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Solanki",
    jobTitle: "Content Writer",
    url: "/",
    email: "mailto:abhisolanki9508@gmail.com",
    sameAs: ["https://www.linkedin.com/in/abhi-solanki/"],
    address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" },
    knowsAbout: ["SEO Writing", "Blog Writing", "Copywriting", "Content Strategy"],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
