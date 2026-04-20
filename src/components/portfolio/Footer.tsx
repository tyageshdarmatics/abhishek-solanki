const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Abhishek Solanki · Content Writer
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:abhisolanki9508@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/abhi-solanki/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#top" className="hover:text-foreground transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
