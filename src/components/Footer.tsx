import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/60 text-sm order-2 md:order-1">
            © 2024 All rights reserved.
          </p>
          
          <div className="flex gap-4 order-1 md:order-2">
            <a
              href="https://github.com/chandra-reddy-tiyyagura?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-purple"
            >
              <Github className="w-6 h-6 text-focus-purple" />
            </a>
            <a
              href="https://www.linkedin.com/in/chandra-reddy-tiyyagura/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-cyan"
            >
              <Linkedin className="w-6 h-6 text-focus-cyan" />
            </a>
            <a
              href="mailto:chandrareddy.tiyyagura@zohomail.in"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:glow-effect-pink"
            >
              <Mail className="w-6 h-6 text-focus-pink" />
            </a>
          </div>

          <h2 className="text-xl font-bold gradient-text order-3">Tiyyagura Chandra Reddy</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
