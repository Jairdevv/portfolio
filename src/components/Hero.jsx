import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";


const Hero = () => {
  // const [isVisible, setIsVisible] = useState(false)
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  const words = ["Ingeniero de software", "Desarrollador web", "Diseñador", "Programador"];

  useEffect(() => {
    const animationCycle = () => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);

        setTimeout(() => {
          setIsVisible(true);
        }, 200);
      }, 300);
    };

    const interval = setInterval(animationCycle, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/10 pointer-events-none" />

      <div className="container mx-auto py-10 relative z-10">
        <div className="text-center animate-fade-in">

          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hola, soy Jair</span>
              <br />
              <span
                key={currentWord}
                className={`bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent inline-block transition-all duration-500 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-5'
                  }`}
              >
                {words[currentWord]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Ingeniero de Software especializado en crear experiencias digitales
              excepcionales con tecnologías modernas y arquitecturas escalables.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 sm:mb-12">
            <button className="bg-gradient-to-r from-primary/30 to-primary-glow/60 text-primary-foreground px-7 py-3 text-lg font-medium rounded-lg shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Ver mis proyectos
            </button>
            <button className="border border-overlay text-foreground hover:bg-secondary px-7 py-3 text-lg rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
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

