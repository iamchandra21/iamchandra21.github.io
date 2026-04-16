import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MapPin, Building, Calendar, Code2 } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 space-y-8 w-full">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground">Tiyyagura </span>
                <br className="hidden md:block" />
                <span className="gradient-text">Chandra Reddy</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
                Data Scientist & AI/ML Engineer
              </h2>
            </div>
            
            {/* Quick Facts for Recruiters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/40 p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Current Role</p>
                  <p className="text-sm text-foreground/70">SE at HCLTech</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-focus-cyan" />
                <div>
                  <p className="text-sm font-semibold">Experience</p>
                  <p className="text-sm text-foreground/70">3+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-focus-rose" />
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-foreground/70">Bengaluru, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-focus-purple" />
                <div>
                  <p className="text-sm font-semibold">Core Stack</p>
                  <p className="text-sm text-foreground/70">Python, PySpark, AWS, GenAI</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl text-center lg:text-left">
              Specializing in scalable machine learning pipelines, predictive analytics, and end-to-end data engineering to drive measurable business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-bg-primary hover:opacity-90 transition-opacity w-full sm:w-auto h-12 px-8"
                asChild
              >
                <a 
                  href="https://workdrive.zohoexternal.in/file/vp1i9c17ad0f821cb4e88a9e0d3b34e579839"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("experience")}
                className="w-full sm:w-auto h-12 px-8"
              >
                See Impact
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <a href="https://github.com/iamchandra21" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/iamchandra21/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:chandra.tiyyagura@gmail.com" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Static Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Clean backplate instead of glowing blur */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 rotate-12 transition-transform duration-700 hover:rotate-45"></div>
              <div className="absolute inset-0 rounded-full border border-primary/10 -rotate-12 transition-transform duration-700 hover:-rotate-45"></div>
              
              <img
                src={profileImage}
                alt="Tiyyagura Chandra Reddy"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-xl border-8 border-background z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
