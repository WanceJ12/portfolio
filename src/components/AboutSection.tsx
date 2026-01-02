const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            About Me
          </h2>

          {/* Content */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              I'm a third-year student at Multimedia University of Kenya, specializing in 
              <span className="text-primary font-medium"> Applied Mathematics</span> and 
              <span className="text-primary font-medium"> Computer Science</span>.
            </p>
            
            <p>
              I come from a humble background. The journey hasn't been easy — balancing 
              learning to code, taking care of myself, and managing my studies. My last 
              two semesters have been challenging, but I've made a decision to embark 
              seriously on my academics.
            </p>
            
            <p className="text-muted-foreground border-l-2 border-primary/50 pl-4">
              "The pieces are scattered, but I'm gathering them one by one. 
              By time, I will be great."
            </p>

            <p>
              By the end of my 4-year course, I will be proud of myself — that's a promise.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 mt-10">
            <span className="px-4 py-2 bg-card border border-border rounded-md text-sm">
              Year 3 · Semester 1
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-md text-sm">
              Applied Mathematics
            </span>
            <span className="px-4 py-2 bg-card border border-border rounded-md text-sm">
              Computer Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
