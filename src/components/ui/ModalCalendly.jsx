import { X, Calendar, Video } from 'lucide-react'
import { InlineWidget } from 'react-calendly'

//TODO: Arreglar el tamaño del modal en pantallas pequeñas
//TODO: Sincronizar los colores con los de la app (usar variables de tailwind)

const ModalCalendly = ({ setIsOpen, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-background-50 backdrop-blur-sm flex items-center justify-center z-50 px-3 pb-4 pt-20 md:px-0" onClick={() => setIsOpen(false)}>
      <div
        className="bg-background rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl relative overflow-hidden h-[100%] animate-fade-in"
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

        <div className="px-3 sm:px-6 py-4 bg-background-50 border-b border-secondary">
          <div className="flex flex-wrap gap-4 text-sm text-secondary-foreground">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-green-500" />
              <span>Videollamada por Google Meet</span>
            </div>
          </div>
        </div>


        {/* Calendly embebido */}
        <div className='h-[calc(100%-134px)] px-2 sm:px-0'>
          <InlineWidget
            url="https://calendly.com/jairjavierf3/reunion-inicial"
            // url="https://calendly.com/jairjavierf3/reunion-inicial?background_color=000000&text_color=ffffff&primary_color=00aacf"
            styles={{ height: "90%" }}
          />
        </div>
      </div>
    </div >
  )
}

export default ModalCalendly 
