import { Shield, Network, Brain, Terminal } from "lucide-react";

const PassionsSection = () => {
  const passions = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "My true calling — diving deep into how networks behave, vulnerabilities, and defense.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "IP, TCP, UDP — the language of the digital world fascinates me.",
    },
    {
      icon: Brain,
      title: "Applied Mathematics",
      description: "Working with abstractions and solving real-world problems through math.",
    },
    {
      icon: Terminal,
      title: "Problem Solving",
      description: "Breaking complex problems into solvable pieces — bridging math and code.",
    },
  ];

  return (
    <section id="passions" className="py-20 bg-card/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            What Drives Me
          </h2>

          {/* Passion cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {passions.map((passion) => (
              <div 
                key={passion.title}
                className="bg-background border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <passion.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {passion.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {passion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
