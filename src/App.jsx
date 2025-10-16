import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ui/ThemeToggle";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react'
import { Helmet } from 'react-helmet'
import "./App.css";


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
      <Helmet>
        {/* SEO básico */}
        <title>Jair Fernandez | Ingeniero de Software</title>
        <meta name="google-site-verification" content="aATrUCip3rtYf4wEw5IFuyfeBWglcFF9y7TY07bwMQU" />
        <meta
          name="description"
          content="Portfolio de Jair Fernandez, ingeniero de software especializado en desarrollo web full-stack, optimización de rendimiento y experiencia de usuario."
        />
        <meta name="keywords" content="ingeniero de software, desarrollo web, full-stack, react, node.js, express" />
        <meta name="author" content="Jair Fernandez" />
        <link rel="canonical" href="https://jairfernandez.vercel.app" />

        {/* Redes sociales */}
        <meta property="og:title" content="Jair Fernández | Ingeniero de Software" />
        <meta
          property="og:description"
          content="Portfolio con proyectos de desarrollo web full-stack, optimización y arquitectura de software."
        />
        <meta property="og:image" content="https://jairfernandez.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://jairfernandez.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jair Fernández | Ingeniero de Software" />
        <meta
          name="twitter:description"
          content="Explora los proyectos y experiencia profesional de Jair Fernández en desarrollo web y software."
        />
        <meta name="twitter:image" content="https://jairfernandez.vercel.app/preview.jpg" />

        {/* schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jair Fernández",
            jobTitle: "Ingeniero de Software",
            url: "https://jairfernandez.vercel.app",
            sameAs: [
              "https://github.com/Jairdevv",
              "https://www.linkedin.com/in/jair-fernandez-almeida-895645212/"
            ]
          })}
        </script>
      </Helmet>
      <ThemeToggle toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}
