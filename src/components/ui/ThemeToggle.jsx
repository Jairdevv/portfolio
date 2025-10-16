import { Sun, Moon } from 'lucide-react'
const ThemeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 cursor-pointer p-3 rounded-full 
                 bg-background-50 hover:bg-primary-10 border border-primary-30 
                 text-primary shadow-lg hover:shadow-xl backdrop-blur-sm 
                 transition-all duration-300 z-50 hover:scale-110"
      aria-label="Cambiar tema"
    >
      {darkMode ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  )
}

export default ThemeToggle
