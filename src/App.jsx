import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import { Download } from "lucide-react";
import Projects from "./components/Projects";
import About from "./components/About";

export default function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Hero />
      <Projects />

      {/* Sobre mí */}
      <About />

      {/* Mantenimiento
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
      </section> */}

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
    </div>
  );
}
