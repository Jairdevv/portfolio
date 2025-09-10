import { useEffect, useState } from "react";
import { X, Menu, ChevronDown, Download, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroller = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroller);
    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  const leftItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
  ];
  const centerItem = { href: "#inicio", label: "Portafolio" };

  const rightItems = [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleNavClick = (section) => {
    setActiveSection(section.href);
    setIsMenuOpen(false);
  };

  return (
    <nav className=" fixed top-3 left-0 right-0 z-50 px-6">
      <div
        className={`flex h-14 sm:h-16 shadow-lg w-full lg:w-[80%] mx-auto rounded-4xl p-3 transition-colors duration-300 z-50 ${isScrolled
          ? "bg-background/90 backdrop-blur-md border border-primary/30"
          : "bg-transparent border-0"
          }`}
      >
        <ul className="flex items-center justify-around w-[90%] sm:w-full">
          <li className="hidden sm:flex gap-5 md:gap-10 w-[30%] justify-around">
            {leftItems.map((item) => (
              <a
                key={item.href}
                className={`relative text-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer group ${activeSection === item.href ? "text-primary" : ""
                  }`}
                href={item.href}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-all duration-500 ${activeSection === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </a>
            ))}
          </li>

          <li className="text-2xl font-bold cursor-pointer text-center">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              {centerItem.label}
            </h2>
          </li>

          <li className="hidden sm:flex gap-5 md:gap-10 w-[30%] justify-around">
            {rightItems.map((item) => (
              <a
                key={item.href}
                className={`relative text-foreground/80 hover:text-primary duration-300 transition-all cursor-pointer group ${activeSection === item.href ? "text-primary" : ""
                  }`}
                href={item.href}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-all duration-500 ${activeSection === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </a>
            ))}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden transition-all text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden py-5 animate-fade-in rounded-4xl backdrop-blur-xl bg-background/90 mt-2 border border-primary/20 shadow-lg shadow-primary/10">
          <ul className="flex flex-col items-center gap-7">
            {leftItems.concat(rightItems).map((item) => (
              <li key={item.href} className="py-2">
                <a
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="text-foreground w-[90%] flex justify-center items-center gap-2 mx-auto mt-4 glow-effect bg-primary/10 border border-primary/30 rounded-xl py-2 hover:bg-primary/20 transition-all duration-300">
            <Download size={16} />
            Descargar CV
          </button>
        </div>
      )}
    </nav >
  );
};

export default Navbar;
