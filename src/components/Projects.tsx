import { Github, CheckCircle2, Calendar, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import truckImage from "@/assets/truck-project.png";
import financeImage from "@/assets/finance-project.jpg";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "APS Failure Classification",
      image: truckImage,
      description:
        "Engineered predictive analytics using a robust binary classification model focused on essential components of Air Pressure Systems, reducing false predictions by approximately 25% through enhanced issue identification capabilities.",
      fullDescription:
        "Solution: By understanding existing product registered against financial products we can create an ML model that can help us to identify newly registered complaint whether they are problematic or not and accordingly company can take quick action to resolve the issue.",
      technologies: ["Machine Learning", "FastAPI", "Docker", "MongoDB", "AWS (ECR, S3)"],
      features: ["Real-time prediction", "AWS deployment", "90% accuracy"],
      impact: {
        duration: "3 months",
        result: "25% faster diagnosis",
      },
      caseStudy: "/project/aps-failure",
      github: "https://github.com/iamchandra21/APS-failure-classification",
    },
    {
      id: 1,
      title: "Financial Product Complaint Analysis",
      image: financeImage,
      description:
        "Built a machine learning system to classify and predict customer complaints for financial products, enabling quick identification of problematic complaints and helping companies take proactive action.",
      fullDescription:
        "Solution: By understanding existing complaint registered against financial products we can create an ML model that can help us to identify newly registered complaint whether they are problematic or not and accordingly company can take quick action to resolve the issue.",
      technologies: ["Python", "Machine Learning", "Docker", "CircleCI", "Apache Airflow"],
      features: ["ML-based complaint classification", "Automated pipeline", "CI/CD integration"],
      impact: {
        duration: "4 months",
        result: "Automated complaint triage",
      },
      github: "https://github.com/iamchandra21/financial-product-complaint",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Innovative machine learning solutions and AI-powered applications that demonstrate expertise in data
            science, natural language processing, and scalable deployments.
          </p>
        </div>

        {/* Bento Box Style Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover-shadow-orange hover:-translate-y-2 border border-border/50 bg-background/50 backdrop-blur-sm"
            >
              {/* Image Header with Glowing Gradient Overlay */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-foreground group-hover:text-focus-orange transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col gap-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-focus-orange/5 rounded-full blur-3xl -z-10" />
                
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Impact Metrics Bento Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-2xl p-4 bg-background/40 border-l-4 border-focus-cyan">
                    <div className="flex items-center gap-2 text-foreground/60 mb-2">
                      <Calendar className="w-4 h-4 text-focus-cyan" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Duration</span>
                    </div>
                    <div className="font-semibold text-base md:text-lg">{project.impact.duration}</div>
                  </div>
                  <div className="glass-card rounded-2xl p-4 bg-background/40 border-l-4 border-focus-lime">
                    <div className="flex items-center gap-2 text-foreground/60 mb-2">
                      <Target className="w-4 h-4 text-focus-lime" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Impact</span>
                    </div>
                    <div className="font-semibold text-base md:text-lg">{project.impact.result}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-focus-orange mb-4 tracking-widest uppercase">
                    Technologies & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-focus-orange/10 text-focus-orange border border-focus-orange/20 rounded-full text-xs font-medium hover:bg-focus-orange/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-auto pt-6 border-t border-border/50">
                  <h4 className="text-xs font-semibold text-focus-cyan mb-4 tracking-widest uppercase">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-focus-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/75 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  {project.caseStudy ? (
                    <>
                      <Button
                        className="flex-1 h-12 rounded-xl gradient-bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm border-0"
                        asChild
                      >
                        <Link to={project.caseStudy}>
                          <BookOpen className="w-5 h-5 mr-2" />
                          Read Case Study
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 w-12 rounded-xl border-border/50 hover:bg-focus-orange/90 hover:text-white hover:border-focus-orange transition-all p-0 flex items-center justify-center flex-shrink-0"
                        onClick={() => window.open(project.github, "_blank")}
                        title="View GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-focus-orange hover:text-white transition-all shadow-sm border border-border/50"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-5 h-5 mr-3" />
                      View Repository
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
