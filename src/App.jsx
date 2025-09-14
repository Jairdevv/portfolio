import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ContactMe />
    </div>
  );
}
