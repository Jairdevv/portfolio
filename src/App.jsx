import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react'
// import Footer from "./components/Footer";


export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="text-gray-800">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 cursor-pointer p-3 rounded-full bg-background-50 hover:bg-primary-10 border border-primary-30 text-primary shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 z-50 hover:scale-110"
        aria-label="Cambiar tema"
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ContactMe />
      {/* <Footer /> */}
    </div>
  );
}
