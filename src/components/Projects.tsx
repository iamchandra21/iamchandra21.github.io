import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, CheckCircle2, ChevronRight } from "lucide-react";
import truckImage from "@/assets/truck-project.jpg";
import financeImage from "@/assets/finance-project.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "APS Failure Classification",
      image: truckImage,
      description:
        "Engineered predictive analytics using a robust binary classification model focused on essential components of Air Pressure Systems, reducing false predictions by approximately 25% through enhanced issue identification capabilities.",
      fullDescription:
        "Solution: By understanding existing product registered against financial products we can create an ML model that can help us to identify newly registered complaint whether they are problematic or not and accordingly company can take quick action to resolve the issue, and satisfy the customer's need. The problem is to identify registered complaint will be disputed by customer or not.",
      technologies: ["Machine Learning", "FastAPI", "Docker", "MongoDB", "AWS (ECR, S3)"],
      features: ["Real-time prediction", "AWS deployment", "90% accuracy"],
      impact: {
        duration: "3 months",
        result: "25% faster diagnosis",
      },
      github: "https://github.com",
    },
    {
      id: 1,
      title: "Financial Product Complaint Analysis",
      image: financeImage,
      description:
        "Built a machine learning system to classify and predict customer complaints for financial products, enabling quick identification of problematic complaints and helping companies take proactive action to resolve customer issues.",
      fullDescription:
        "Solution: By understanding existing complaint registered against financial products we can create an ML model that can help us to identify newly registered complaint whether they are problematic or not and accordingly company can take quick action to resolve the issue, and satisfy the customer's need. The problem is to identify registered complaint will be disputed by customer or not.",
      technologies: ["Python", "Machine Learning", "Docker", "CircleCI", "Apache Airflow"],
      features: ["ML-based complaint classification", "Automated pipeline", "CI/CD integration"],
      impact: {
        duration: "4 months",
        result: "Automated complaint triage",
      },
      github: "https://github.com",
    },
  ];

  const currentProject = projects[selectedProject];

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

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {/* Project List */}
          <div className="lg:col-span-2 space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedProject === index
                    ? "border-focus-orange border-2 bg-focus-orange/10"
                    : "border-border/50"
                }`}
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-1 ${selectedProject === index ? "text-focus-orange" : ""}`}>{project.title}</h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      selectedProject === index ? "text-focus-orange" : "text-foreground/30"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold">{currentProject.title}</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-focus-orange/50 hover:bg-focus-orange/10"
                  onClick={() => window.open(currentProject.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>

              <p className="text-foreground/70 leading-relaxed">{currentProject.description}</p>
              <p className="text-foreground/60 leading-relaxed text-sm">{currentProject.fullDescription}</p>

              <div>
                <h4 className="text-sm font-semibold text-focus-orange mb-3">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-focus-orange/20 text-sm border border-focus-orange/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-focus-cyan mb-3">KEY FEATURES</h4>
                <div className="space-y-2">
                  {currentProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-focus-cyan flex-shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-focus-lime mb-3">PROJECT IMPACT</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4 border-l-4 border-focus-cyan">
                    <div className="text-sm text-foreground/60 mb-1">Duration</div>
                    <div className="text-lg font-semibold">{currentProject.impact.duration}</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-focus-lime">
                    <div className="text-sm text-foreground/60 mb-1">Result</div>
                    <div className="text-lg font-semibold">{currentProject.impact.result}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Accordion Style */}
        <div className="lg:hidden space-y-4">
          {projects.map((project, index) => (
            <div key={project.id} className="w-full">
              <div
                onClick={() => setSelectedProject(index)}
                className={`glass-card rounded-xl p-4 md:p-6 cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? "border-focus-orange border-2 bg-focus-orange/10"
                    : "border-border/50"
                }`}
              >
                <div className="flex gap-3 md:gap-4 items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-base md:text-lg ${selectedProject === index ? "text-focus-orange" : ""}`}>
                      {project.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      selectedProject === index ? "text-focus-orange rotate-90" : "text-foreground/30"
                    }`}
                  />
                </div>
              </div>

              {selectedProject === index && (
                <div className="mt-4 glass-card rounded-2xl p-4 md:p-6 space-y-4 md:space-y-6 animate-fade-in overflow-hidden">
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-focus-orange/50 hover:bg-focus-orange/10 text-xs md:text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      GitHub
                    </Button>
                  </div>

                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{project.description}</p>
                  <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">{project.fullDescription}</p>

                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-focus-orange mb-2 md:mb-3">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-focus-orange/20 text-xs md:text-sm border border-focus-orange/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-focus-cyan mb-2 md:mb-3">KEY FEATURES</h4>
                    <div className="space-y-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-focus-cyan flex-shrink-0" />
                          <span className="text-xs md:text-sm text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-focus-lime mb-2 md:mb-3">PROJECT IMPACT</h4>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="glass-card rounded-xl p-3 md:p-4 border-l-4 border-focus-cyan">
                        <div className="text-xs md:text-sm text-foreground/60 mb-1">Duration</div>
                        <div className="text-sm md:text-lg font-semibold">{project.impact.duration}</div>
                      </div>
                      <div className="glass-card rounded-xl p-3 md:p-4 border-l-4 border-focus-lime">
                        <div className="text-xs md:text-sm text-foreground/60 mb-1">Result</div>
                        <div className="text-sm md:text-lg font-semibold">{project.impact.result}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
