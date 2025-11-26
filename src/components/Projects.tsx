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
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Innovative machine learning solutions and AI-powered applications that demonstrate expertise in data
            science, natural language processing, and scalable deployments.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Project List */}
          <div className="lg:col-span-2 space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`glass-card rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedProject === index
                    ? "border-primary border-2 bg-primary/10"
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
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">{project.description}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      selectedProject === index ? "text-primary" : "text-foreground/30"
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
                  className="border-primary/50"
                  onClick={() => window.open(currentProject.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>

              <p className="text-foreground/70 leading-relaxed">{currentProject.description}</p>
              <p className="text-foreground/60 leading-relaxed text-sm">{currentProject.fullDescription}</p>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-primary/20 text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent mb-3">KEY FEATURES</h4>
                <div className="space-y-2">
                  {currentProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-secondary mb-3">PROJECT IMPACT</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4 border-l-4 border-accent">
                    <div className="text-sm text-foreground/60 mb-1">Duration</div>
                    <div className="text-lg font-semibold">{currentProject.impact.duration}</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 border-l-4 border-secondary">
                    <div className="text-sm text-foreground/60 mb-1">Result</div>
                    <div className="text-lg font-semibold">{currentProject.impact.result}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
