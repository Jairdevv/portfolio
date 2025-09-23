import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-primary-30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-secondary-foreground">
            <span>Hecho con</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>y mucho</span>
            <Coffee size={16} className="text-orange-500" />
            <span>usando</span>
            <Code size={16} className="text-primary" />
          </div>

          <div className="text-secondary-foreground">
            © {new Date().getFullYear()} <span className="text-primary-glow">Jair Fernández</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;