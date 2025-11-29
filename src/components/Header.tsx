import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold gradient-text">Tiyyagura Chandra Reddy</h1>
        <nav className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Experience", "Education"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/80 hover:text-foreground hover:bg-transparent"
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
