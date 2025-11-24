import { Code, Brain, MessageSquare, Sparkles, Database, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data Handling",
      color: "purple",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "cyan",
      skills: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "XGBoost", "SVM", "K-Means", "PCA", "DBSCAN"],
    },
    {
      icon: MessageSquare,
      title: "Deep Learning & Natural Language Processing (NLP)",
      color: "pink",
      skills: ["Artificial Neural Networks (ANN)", "Convolutional Neural Networks (CNN)", "Transfer Learning", "BERT", "GPT", "Transformers", "Tokenization", "Embeddings"],
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      color: "orange",
      skills: ["LangChain", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "AI Agents", "Vector Databases"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "green",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud",
      color: "blue",
      skills: ["GitHub Actions", "Docker", "AWS SageMaker", "AWS Bedrock", "AWS S3", "AWS EC2", "AWS ECR", "MLflow"],
    },
    {
      icon: Cpu,
      title: "APIs & Deployment",
      color: "cyan",
      skills: ["Flask", "FastAPI", "Streamlit", "Postman", "AWS Elastic Beanstalk", "AWS Lambda"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Technical Skills</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent data-driven solutions
          </p>
          <div className="w-20 h-1 gradient-bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-6 space-y-4 animate-fade-in hover:scale-105 transition-transform duration-300 border-l-4"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderLeftColor: `hsl(var(--focus-${category.color}))`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-focus-${category.color}/20 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-focus-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-background/50 text-sm text-foreground/80 border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
