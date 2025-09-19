import features from "../data/features";


const About = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="sobre-mi">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-50 pointer-events-none" />
      <div className="absolute top-32 left-20 w-72 h-72 bg-primary-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary-glow-10 rounded-full blur-3xl animate-pulse delay-500" />


      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un ingeniero de software apasionado por crear soluciones digitales
            que marquen la diferencia. Con más de 3 años de experiencia, me especializo
            en desarrollar aplicaciones web modernas, escalables y centradas en el usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              className={`group relative bg-background backdrop-blur-md border border-primary-20 rounded-2xl p-6 hover:border-primary-30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-elegant animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary-20 backdrop-blur-sm border border-primary-30 group-hover:bg-primary-30 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
