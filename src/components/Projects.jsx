import { ExternalLink, Github, Code } from "lucide-react";
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="proyectos" className=" px-6 relative overflow-hidden bg-gradient-to-b from-background-50 via-primary-5 to-background-90">

      <div className="max-w-6xl py-20 pb-0 mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-foreground text-3xl font-semibold mb-4 text-center">Proyectos Destacados</h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mis habilidades en desarrollo web fullstack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group relative bg-gradient-to-br from-primary-glow-30 to-primary-10 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary-20`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Code size={24} className="text-primary-80 group-hover:text-primary transition-colors duration-300" />
                </div>

                <p className="text-secondary-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary-10 text-primary rounded-full border border-primary-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-30 to-primary-glow-10 text-foreground rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer"
                    {...(project.demoUrl !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-primary-30 text-foreground hover:bg-primary-10 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    {...(project.githubUrl !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
