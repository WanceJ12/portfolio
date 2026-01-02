const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">©</span> {currentYear} Joseph Wanjiku
          </div>
          
          <div className="text-xs text-terminal-dim font-mono">
            <span className="text-primary">&lt;</span>
            coded with curiosity
            <span className="text-primary">/&gt;</span>
          </div>

          <div className="text-xs text-muted-foreground">
            Built from Kenya 🇰🇪
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
