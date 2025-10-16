import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";


const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  const words = ["Ingeniero de software", "Desarrollador web", "Diseñador UX/UI"];

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
    <section id="inicio" className="min-h-screen flex items-center justify-center py-20 pb-10 px-6 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-primary-80 via-transparent to-primary-80 dark:from-primary-20 dark:via-transparent dark:to-primary-glow-10 pointer-events-none" />
      {/* <div className="absolute top-20 right-20 w-72 h-72 bg-primary-10 delay-700 fill-mode-both transition-colors rounded-full blur-2xl animate-pulse" /> */}
      {/* <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow-10 rounded-full blur-2xl animate-pulse" /> */}

      <div className="container mx-auto py-10 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
            <span className="text-foreground">Hola, soy Jair Fernandez</span>
            <br />
            <span
              key={currentWord}
              className={`bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent block transition-all duration-1000 ease-out h-20 sm:h-20 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-5'
                }`}
            >
              {words[currentWord]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollo aplicaciones web fullstack con Node.js, React y PostgreSQL, enfocadas en escalabilidad y buen rendimiento
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
            <a href="#proyectos" className="bg-gradient-to-r from-primary-30 to-primary-glow-60 text-foreground px-7 py-3 text-lg font-medium rounded-lg shadow-glow hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Ver mis proyectos
            </a>
            <a href="/CV Jair Fernandez.pdf" target="_blank" className="border-2 border-overlay text-foreground hover:bg-secondary px-7 py-3 text-lg rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Download size={16} className="inline mr-2" />
              Descargar CV
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-secondary-foreground">
          <div className="flex gap-6">
            <a href="https://github.com/Jairdevv" rel="noopener noreferrer"
              target="_blank" className="hover:scale-110 transition-transform">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jair-fernandez-almeida-895645212/" rel="noopener noreferrer"
              target="_blank" className="hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jairjavierf3@gmail.com  " className="hover:scale-110 transition-transform">
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={24} className="text-secondary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

