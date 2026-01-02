const SkillsSection = () => {
  const comfortable = ["HTML", "CSS"];
  const learning = ["JavaScript", "Java", "Python", "SQL", "C/C++"];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Skills
          </h2>

          <div className="space-y-6">
            {/* Comfortable */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Comfortable with</h3>
              <div className="flex flex-wrap gap-2">
                {comfortable.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Currently learning</h3>
              <div className="flex flex-wrap gap-2">
                {learning.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-md text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-muted-foreground mt-8">
            Gathering the pieces, one language at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
