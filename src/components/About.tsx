import { Brain, MessageSquare, Sparkles, Cloud } from "lucide-react";

const About = () => {
  const focusAreas = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Building predictive models, implementing deep learning solutions, and deploying ML pipelines",
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Working with transformers, BERT, GPT models, and developing conversational AI systems",
      color: "pink",
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "LLMs, RAG systems, prompt engineering, and building AI-powered applications",
      color: "orange",
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud",
      description: "AWS deployment, containerization with Docker, and CI/CD for ML models",
      color: "blue",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and building intelligent solutions
          </p>
          <div className="w-20 h-1 gradient-bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-2xl p-8 space-y-4 animate-fade-in hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-primary">My Journey</h3>
            <p className="text-foreground/70 leading-relaxed">
              As a Data Scientist and AI/ML Engineer with over 3+ years of software engineering experience, I
              specialize in developing end-to-end machine learning solutions that drive business value. Currently
              leading a team of 4 at HCLTech, working with Adobe to create innovative solutions that enhance user
              engagement and drive conversion rates.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              My expertise spans the entire ML pipeline - from data preprocessing and feature engineering to model
              deployment and monitoring. I'm passionate about leveraging cutting-edge technologies like LangChain,
              RAG systems, and Generative AI to solve complex business problems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold gradient-text mb-2">3+</div>
              <div className="text-foreground/60">Years Experience</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-foreground/60">Projects Completed</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-accent mb-8">Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="glass-card rounded-2xl p-6 flex gap-4 animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-focus-${area.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-focus-${area.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
