import { BookOpen, Code, Database, Award, Calendar, Star } from "lucide-react";

const Education = () => {
  const highlights = [
    {
      icon: Code,
      title: "Strong Foundation",
      description: "Algorithms & Data Structures",
    },
    {
      icon: Database,
      title: "Technical Skills",
      description: "Software Development",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Top Performance",
    },
  ];

  const focusAreas = [
    "Computer Science Fundamentals",
    "Software Engineering",
    "Data Structures & Algorithms",
    "Database Systems",
    "Web Development",
    "Project Management",
    "Machine Learning",
    "Deep Learning and NLP",
    "Exploratory Data Analysis",
    "Big Data",
  ];

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            My academic journey and foundation in Computer Science & Engineering
          </p>
          <div className="w-20 h-1 gradient-bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-focus-teal to-focus-cyan flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  Bachelor of Technology - Computer Science and Engineering
                </h3>
                <div className="flex flex-wrap gap-4 text-foreground/60 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold">LBRCE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jun 2018 - May 2022</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-focus-yellow/20 border border-focus-yellow/30">
                    <Star className="w-4 h-4 text-focus-yellow" />
                    <span className="font-semibold text-focus-yellow">CGPA: 8.95</span>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Graduated with 8.95 CGPA. Specialized in Computer Science and Engineering with strong foundation
                  in algorithms, data structures, and software development.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="glass-card rounded-xl p-6 space-y-3 hover-shadow-primary"
                  >
                    <div className="w-12 h-12 rounded-lg bg-focus-lime/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-focus-lime" />
                    </div>
                    <h4 className="font-semibold text-lg">{highlight.title}</h4>
                    <p className="text-sm text-foreground/60">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-focus-teal" />
              <h4 className="text-2xl font-bold">Key Focus Areas</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-lg bg-focus-teal/20 border border-focus-teal/30 text-sm hover:bg-focus-teal/30 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
