import { Mail, Github, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Open for internship & attachment opportunities
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a 
              href="mailto:josewainai@gmail.com"
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                josewainai@gmail.com
              </p>
            </a>
            
            <a 
              href="https://github.com/WanceJ12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                WanceJ12
              </p>
            </a>
            
            <a 
              href="https://wa.me/254718330797"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                0718330797
              </p>
            </a>
          </div>

          {/* Simple message */}
          <p className="text-muted-foreground text-sm">
            Let's connect and build something together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
