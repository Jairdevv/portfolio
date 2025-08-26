import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroller = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroller);
    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  const leftItems = ["Home", "Sobre mí"];
  const centerItem = "Portafolio";
  const rightItems = ["Proyectos", "Contacto"];

  return (
    <nav className="text-white fixed top-3 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        {/* flex items-center justify-between h-16 */}
        <div
          className={`hidden sm:flex h-16 shadow-md w-full lg:w-[80%] mx-auto rounded-4xl ${
            isScrolled ? "backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <ul className="flex items-center justify-around w-full">
            <li className="flex gap-10 w-[30%] justify-around mx-0">
              {leftItems.map((item) => (
                <a
                  key={item}
                  className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              ))}
            </li>

            <li className="text-2xl font-bold cursor-pointer hover:text-blue-500 text-center mx-0">
              <a href="">
                <h2 className="text-2xl font-bold text-white">{centerItem}</h2>
              </a>
            </li>

            <li className="flex gap-10 w-[30%] justify-around">
              {rightItems.map((item) => (
                <a
                  key={item}
                  className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              ))}
            </li>
          </ul>

          {/* Mobile Menu Button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
