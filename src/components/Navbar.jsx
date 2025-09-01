import { useEffect, useState } from "react";
import { X, Menu, ChevronDown, Download, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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
    setActiveSection(section.toLowerCase().replace(" ", "-"));
    setIsMenuOpen(false);
  };

  return (
    <nav className=" fixed top-3 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        {/* flex items-center justify-between h-16 */}
        <div
          className={`flex h-16 shadow-md w-full lg:w-[80%] mx-auto rounded-4xl p-3 transition-all duration-300 z-50 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-md border border-border"
              : "bg-transparent border sm:border-0 sm:bg-transparent"
          }`}
        >
          <ul className="flex items-center justify-around w-[90%] sm:w-full">
            <li className="hidden sm:flex gap-5 md:gap-10 w-[30%] justify-around">
              {leftItems.map((item) => (
                <a
                  key={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </li>

            <li className="text-2xl font-bold cursor-pointer text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                {centerItem.label}
              </h2>
            </li>

            <li className="hidden sm:flex gap-5 md:gap-10 w-[30%] justify-around">
              {rightItems.map((item) => (
                <a
                  key={item.href}
                  className="text-foreground/80 hover:text-primary duration-300 transition-colors cursor-pointer"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden trasnsition-all text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-5 animate-fade-in  rounded-4xl backdrop-blur-md bg-overlay mt-2">
            <ul className="flex flex-col items-center gap-7">
              {leftItems.concat(rightItems).map((item) => (
                <li key={item.href} className="py-2">
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="text-foreground w-[90%] flex justify-center mx-auto mt-2 glow-effect bg-background/90 border border-gray-700/70 rounded-xl py-1">
              Descargar CV
            </button>
            <button className="text-white w-[90%] flex justify-center mx-auto mt-2 bg-gray-800/90 border border-gray-600 rounded-xl py-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
              Descargar CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
