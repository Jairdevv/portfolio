import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="text-white fixed top-3 left-0 right-0">
      <div className="container mx-auto px-6 ">
        {/* flex items-center justify-between h-16 */}
        <div
          className={`flex space-x-4 items-center justify-around h-16  shadow-md ${
            isScrolled ? "backdrop-blur-xl rounded-xl" : "bg-transparent"
          }`}
        >
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Sobre mí</li>
          </ul>
          <div className="flex space-x-4">Portafolio</div>
          <ul className="flex space-x-4">
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
