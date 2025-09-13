
const ContactMe = () => {
  return (
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
  )
}

export default ContactMe
