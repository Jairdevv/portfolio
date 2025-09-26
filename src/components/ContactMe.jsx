import { contactInfo, socialLinks } from '../data/contactInfo';
import { useState } from "react";
import ModalCalendly from './ui/ModalCalendly';
import FormContact from './ui/FormContact';



const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden" id="contacto">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trabajemos{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo podemos hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Información de Contacto
              </h3>

              <div className="space-y-7">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-secondary-50 hover:bg-secondary-70 transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary-10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Sígueme en
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary-50 text-secondary-foreground rounded-lg flex items-center justify-center hover:primary-10 hover:text-primary transition-all duration-300 group"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-20 to-primary-5 border border-primary-glow-30">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                ¿Prefieres una llamada rápida?
              </h4>
              <p className="text-[rgb(148,163,184)] text-sm mb-4">
                Podemos agendar una videollamada para discutir tu proyecto en detalle.
              </p>
              <button className="text-[rgb(0,170,199)] font-medium text-sm hover:text-[rgb(0,128,255)] transition-colors duration-200" onClick={() => (setIsOpen(true))}>
                Agendar llamada →
              </button>
            </div>
          </div>

          {/* Modal de Calendly */}
          {isOpen && <ModalCalendly isOpen={isOpen} setIsOpen={setIsOpen} />}

          <FormContact />
        </div>
      </div>
    </section >
  )
}

export default ContactMe
