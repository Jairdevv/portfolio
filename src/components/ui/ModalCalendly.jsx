import { X, Calendar } from 'lucide-react'
import { InlineWidget } from 'react-calendly'

const ModalCalendly = ({ setIsOpen, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-background-50 backdrop-blur-sm flex items-center justify-center z-50 px-3 pt-20 pb-4 sm:px-0" onclick={() => setIsOpen(false)}>
      <div
        className="bg-background-90 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl relative overflow-hidden h-[100%] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-primary-80 to-blue-400 sm:px-6 sm:py-4 px-3 py-2 text-white relative">
          {/* Botón cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-4"
          >
            <X size={24} className='text-foreground' />
          </button>
          <div className="pr-12">
            <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-foreground">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Agendar una Reunión
            </h3>
            <p className="text-foreground text-xs sm:text-sm">
              Selecciona el horario que mejor se adapte a tu agenda
            </p>
          </div>
        </div>


        {/* Calendly embebido */}
        <InlineWidget
          url="https://calendly.com/jairjavierf3/reunion-inicial"
          styles={{ height: "90%" }}
        />
      </div>
    </div >
  )
}

export default ModalCalendly 
