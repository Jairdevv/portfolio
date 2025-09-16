import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react'


export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // añade la clase a <html>
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="text-gray-800">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-2 left-10 cursor-pointer px-4 py-2 rounded-lg bg-primary text-primary-foreground shadow-md z-50"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ContactMe />
    </div>
  );
}
