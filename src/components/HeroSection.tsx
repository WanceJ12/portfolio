import { useEffect, useState } from "react";
import { User } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Applied Mathematics & CS Student | Aspiring Cybersecurity Specialist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Photo placeholder */}
          <div className="mb-8 animate-fade-up">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-primary/50 bg-card flex items-center justify-center overflow-hidden">
              {/* Replace this div with an img tag when you have your photo */}
              <User className="w-16 h-16 md:w-20 md:h-20 text-primary/40" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up-delay-1">
            <span className="text-foreground">Joseph </span>
            <span className="text-gradient">Wanjiku</span>
          </h1>

          {/* Typing animation */}
          <div className="h-8 mb-6 animate-fade-up-delay-2">
            <p className="text-base md:text-lg text-muted-foreground">
              {typedText}
              <span className="inline-block w-2 h-5 bg-primary ml-1 animate-blink" />
            </p>
          </div>

          {/* University info */}
          <div className="animate-fade-up-delay-3 mb-10">
            <p className="text-sm text-muted-foreground">
              Multimedia University of Kenya · Year 3
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-border text-foreground font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
