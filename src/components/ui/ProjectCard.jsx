import { ExternalLink, Github, Code } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="group relative bg-gradient-to-br from-background-50 to-primary-20 rounded-2xl overflow-hidden border border-primary-20 hover:border-primary-40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
      style={{ animationDelay: `${index * 150}ms` }}>

      <div className="relative h-56 overflow-hidden">
        <div className="relative overflow-hidden w-full h-full rounded-2xl ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-20 via-background-50/50 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl" />

        {/* Icono flotante */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
          <Code size={20} className="text-background" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-secondary-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm font-medium bg-primary-10 text-primary rounded-full border border-primary-30 hover:bg-primary-20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-80 text-background rounded-lg hover:from-primary-80 hover:to-primary hover:shadow-glow transition-all duration-300 font-medium"
            {...(project.demoUrl !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <ExternalLink size={16} />
            Ver Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-primary-30 text-foreground hover:bg-primary-10 hover:border-primary-40 rounded-lg transition-all duration-300 font-medium"
            {...(project.githubUrl !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    </div>
  )
}

export default ProjectCard
