import { useEffect, useState } from "react"
import { Send, Mail, User, MessageSquare, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';



const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [submitStatus])


  const EMAILJS_SERVICE_ID = 'service_yl6cslm';
  const EMAILJS_TEMPLATE_ID = 'template_nkm3gx7';
  const EMAILJS_PUBLIC_KEY = '3OMmamS8SahCvleOf';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";

    if (!formData.email.trim()) { newErrors.email = "El email es obligatorio" }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido"
    };

    if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio";
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY);
      console.log("SUCCESS!", response.status, response.text);
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-primary-10 rounded-2xl p-8 backdrop-blur-sm border border-primary-30">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-background-card border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-placeholder border-border-input"
              placeholder="Tu nombre completo"
            />
          </div>
          {errors.name && (
            <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-placeholder w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-background-card border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-placeholder border-border-input"
              placeholder="tu@email.com"
            />
          </div>
          {errors.email && (
            <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </div>
          )}
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
            className="w-full px-3 py-3 bg-background-card border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 text-foreground placeholder-placeholder border-border-input"
            placeholder="¿En qué puedo ayudarte?"
          />
          {errors.subject && (
            <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensaje
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-placeholder w-5 h-5" />
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-background-card border rounded-xl focus:ring-2 focus:ring-primary-80 focus:border-primary outline-none transition-all duration-200 resize-none text-foreground placeholder-placeholder border-border-input"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>
          {errors.message && (
            <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </div>
          )}
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
          <div className={`p-4 rounded-xl text-center font-medium transition-all ${submitStatus === 'success'
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
  )
}

export default FormContact
