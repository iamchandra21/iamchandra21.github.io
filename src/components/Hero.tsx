import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        {/* Mobile Layout - Photo First */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full glow-effect-purple blur-3xl"></div>
              <img
                src={profileImage}
                alt="Tiyyagura Chandra Reddy"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                <span className="gradient-text">Hello, I'm</span>
                <br />
                <span className="text-foreground">Tiyyagura Chandra Reddy</span>
              </h1>
              <h2 className="text-xl font-semibold gradient-text">
                Data Scientist & AI/ML Engineer
              </h2>
            </div>

            <p className="text-base text-foreground/70 leading-relaxed">
              Data Scientist / AI/ML Engineer with 3+ years of experience as a Software Engineer and a
              strong foundation in Python, Machine Learning, NLP, Generative AI, and AWS-based
              deployments. Currently leading a team of 4 and collaborating with cross-functional
              stakeholders.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/chandra-reddy-tiyyagura?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-purple"
              >
                <Github className="w-5 h-5 text-focus-purple" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandra-reddy-tiyyagura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-cyan"
              >
                <Linkedin className="w-5 h-5 text-focus-cyan" />
              </a>
              <a
                href="mailto:chandrareddy.tiyyagura@zohomail.in"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-pink"
              >
                <Mail className="w-5 h-5 text-focus-pink" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="gradient-bg-primary hover:opacity-90 transition-opacity w-full"
                asChild
              >
                <a 
                  href="https://workdrive.zohoexternal.in/file/vp1i9c17ad0f821cb4e88a9e0d3b34e579839"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-primary/50 hover:bg-primary/10 w-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Tablet Layout - Side by Side with 9/3 split */}
        <div className="hidden md:grid lg:hidden grid-cols-12 gap-6 items-center">
          <div className="col-span-9 space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold leading-tight">
                <span className="gradient-text">Hello, I'm</span>
                <br />
                <span className="text-foreground">Tiyyagura Chandra Reddy</span>
              </h1>
              <h2 className="text-2xl font-semibold gradient-text">
                Data Scientist & AI/ML Engineer
              </h2>
            </div>

            <p className="text-base text-foreground/70 leading-relaxed">
              Data Scientist / AI/ML Engineer with 3+ years of experience as a Software Engineer and a
              strong foundation in Python, Machine Learning, NLP, Generative AI, and AWS-based
              deployments. Currently leading a team of 4 and collaborating with cross-functional
              stakeholders.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/chandra-reddy-tiyyagura?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-purple"
              >
                <Github className="w-5 h-5 text-focus-purple" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandra-reddy-tiyyagura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-cyan"
              >
                <Linkedin className="w-5 h-5 text-focus-cyan" />
              </a>
              <a
                href="mailto:chandrareddy.tiyyagura@zohomail.in"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-pink"
              >
                <Mail className="w-5 h-5 text-focus-pink" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-bg-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a 
                  href="https://workdrive.zohoexternal.in/file/vp1i9c17ad0f821cb4e88a9e0d3b34e579839"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="col-span-3 flex justify-center">
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 rounded-full glow-effect-purple blur-3xl"></div>
              <img
                src={profileImage}
                alt="Tiyyagura Chandra Reddy"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Hello, I'm</span>
                <br />
                <span className="text-foreground">Tiyyagura Chandra Reddy</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
                Data Scientist & AI/ML Engineer
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              Data Scientist / AI/ML Engineer with 3+ years of experience as a Software Engineer and a
              strong foundation in Python, Machine Learning, NLP, Generative AI, and AWS-based
              deployments. Currently leading a team of 4 and collaborating with cross-functional
              stakeholders.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/chandra-reddy-tiyyagura?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-purple"
              >
                <Github className="w-5 h-5 text-focus-purple" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandra-reddy-tiyyagura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-cyan"
              >
                <Linkedin className="w-5 h-5 text-focus-cyan" />
              </a>
              <a
                href="mailto:chandrareddy.tiyyagura@zohomail.in"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-pink"
              >
                <Mail className="w-5 h-5 text-focus-pink" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-bg-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a 
                  href="https://workdrive.zohoexternal.in/file/vp1i9c17ad0f821cb4e88a9e0d3b34e579839"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 rounded-full glow-effect-purple blur-3xl"></div>
              <img
                src={profileImage}
                alt="Tiyyagura Chandra Reddy"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
