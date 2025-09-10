import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/10 pointer-events-none" />

      <div className="container mx-auto py-10 relative z-10">
        <div className="text-center animate-fade-in">

          <div className="">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hola, soy Jair</span>
              <br />
              <span className="hero-text animate-glow-pulse">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ingeniero de Software especializado en crear experiencias digitales
              excepcionales con tecnologías modernas y arquitecturas escalables.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 sm:mb-12">
            <button size="lg" className="glow-effect px-8 py-6 text-lg">
              Ver mis proyectos
            </button>
            <button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Contactar
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mb-6 text-muted-foreground">
          <button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Github size={24} />
          </button>
          <button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Linkedin size={24} />
          </button>
          <button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Mail size={24} />
          </button>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div> */}
      </div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;

