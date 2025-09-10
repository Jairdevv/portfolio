const Projects = () => {
  return (
    <section id="proyectos" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background/95">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Gestor de Tareas</h3>
            <p className="mb-4">Aplicación web para gestionar tareas diarias con funcionalidades de creación, edición y eliminación.</p>
            <a href="#" className="text-primary hover:underline">Ver proyecto</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
            <p className="mb-4">Plataforma de comercio electrónico con carrito de compras, pasarela de pago y gestión de productos.</p>
            <a href="#" className="text-primary hover:underline">Ver proyecto</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Blog Personal</h3>
            <p className="mb-4">Sitio web de blog con sistema de gestión de contenido, comentarios y diseño responsivo.</p>
            <a href="#" className="text-primary hover:underline">Ver proyecto</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Red Social</h3>
            <p className="mb-4">Aplicación de red social con perfiles de usuario, publicaciones, amigos y mensajería en tiempo real.</p>
            <a href="#" className="text-primary hover:underline">Ver proyecto</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
