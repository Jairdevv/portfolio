import { ExternalLink, Github, Code } from "lucide-react";
import projects from '../data/projects';
import ProjectCard from "./ui/projectCard";

const Projects = () => {
  return (
    <section id="proyectos" className="px-6 pb-2 relative overflow-hidden bg-gradient-to-b from-background-50 via-primary-5 to-background-90">

      <div className="max-w-6xl py-20 pb-0 mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-foreground text-3xl font-semibold mb-4 text-center">Proyectos Destacados</h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mis habilidades en desarrollo web fullstack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
