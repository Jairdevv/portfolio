import { Send, Mail, User, MessageSquare, Github, Linkedin, Clock, CheckCircle, Star, Zap, Rocket, Twitter } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/contactInfo';
import { useState } from "react";



const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = 0;
      console.log(response)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <button className="text-[rgb(0,170,199)] font-medium text-sm hover:text-[rgb(0,128,255)] transition-colors duration-200">
                Agendar llamada →
              </button>
            </div>
          </div>
          <div className="bg-primary-10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background-50 border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-muted-foreground"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background-50 border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-muted-foreground"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-50 border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-muted-foreground"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background-50 border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 resize-none text-foreground placeholder-muted-foreground "
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[rgb(0,170,199)] to-[rgb(0,128,255)] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[rgb(0,170,199)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Mensaje de estado */}
              {submitStatus && (
                <div className={`p-4 rounded-xl text-center font-medium ${submitStatus === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                  {submitStatus === 'success'
                    ? '¡Mensaje enviado con éxito! Te responderé pronto.'
                    : 'Error al enviar el mensaje. Por favor intenta nuevamente.'
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ContactMe
