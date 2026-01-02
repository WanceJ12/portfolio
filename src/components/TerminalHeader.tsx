const TerminalHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-foreground font-medium">JW</span>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              About
            </a>
            <a href="#passions" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Passions
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
              Contact
            </a>
          </nav>

          <span className="text-xs text-primary">Open to opportunities</span>
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;
