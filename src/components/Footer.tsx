import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold gradient-text">Tiyyagura Chandra Reddy</h2>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-purple"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-cyan"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:email@example.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-pink"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-foreground/60 text-sm">
            © 2024 Tiyyagura Chandra Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
