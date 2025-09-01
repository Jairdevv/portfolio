const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  p-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hola, soy Jair Fernández
        </h1>
        <p className="text-xl mb-6">
          Desarrollador web freelance especializado en sitios corporativos y
          educativos.
        </p>
        <a
          href="#contacto"
          className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-900 transition"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default Hero;
