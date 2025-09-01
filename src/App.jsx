import Navbar from "./components/Navbar";
import Navbarlova from "./components/Navbarlova";
import Hero from "./components/Hero";
import "./App.css";

export default function App() {
  return (
    <div className="text-gray-800">
      {/* Sección Inicio */}
      {/* <Navbarlova /> */}
      <Navbar />
      <Hero />

      {/* Sobre mí */}
      <section className="py-20 px-6 " id="sobre-mi">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
          <p className="text-lg leading-relaxed">
            Soy un desarrollador web apasionado por construir soluciones
            digitales funcionales y atractivas. Me especializo en la creación de
            sitios web para empresas que quieren destacar en internet y para
            instituciones educativas que buscan modernizar su presencia digital.
            Trabajo con tecnologías modernas y me enfoco en la experiencia del
            usuario.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6" id="servicios">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Servicios</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4">
                Sitios Web Corporativos
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Página de inicio profesional</li>
                <li>Sección de servicios</li>
                <li>Formulario de contacto</li>
                <li>Integración con redes sociales y mapa</li>
                <li>SEO básico</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4">Sitios Web Educativos</h3>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Página de inicio institucional</li>
                <li>Listado de cursos o programas</li>
                <li>Calendario académico</li>
                <li>
                  Integraciones con plataformas (Google Classroom, Zoom, Moodle)
                </li>
                <li>Formulario de inscripción o contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimiento */}
      <section className="py-20 px-6 " id="mantenimiento">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            Planes de Mantenimiento
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow border">
              <h4 className="text-xl font-bold mb-2">Básico</h4>
              <p className="mb-4">$25/mes</p>
              <ul className="list-disc ml-6 space-y-2 text-base">
                <li>Actualización de contenido</li>
                <li>Backups mensuales</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-blue-500">
              <h4 className="text-xl font-bold mb-2 text-blue-700">Estándar</h4>
              <p className="mb-4">$50/mes</p>
              <ul className="list-disc ml-6 space-y-2 text-base">
                <li>Todo lo del plan básico</li>
                <li>Actualizaciones técnicas</li>
                <li>Monitoreo de seguridad</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <p className="mb-4">$75/mes</p>
              <ul className="list-disc ml-6 space-y-2 text-base">
                <li>Todo lo del plan estándar</li>
                <li>Optimización de velocidad</li>
                <li>Reportes mensuales</li>
                <li>Soporte rápido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6" id="contacto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contáctame</h2>
          <p className="mb-4 text-lg">
            ¿Tienes un proyecto en mente? Estoy listo para ayudarte.
          </p>
          <a
            href="mailto:jairjavierf3@gmail.com"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition"
          >
            Enviar un correo
          </a>
        </div>
      </section>
      <button className="hidden sm:fixed bottom-4 right-5 bg-blue-700 px-2 py-1 rounded-lg hover:bg-blue-900 transition-colors">
        Descargar CV
      </button>
    </div>
  );
}
