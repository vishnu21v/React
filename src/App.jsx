import React from "react";
import useScrollReveal from "./hooks/useScrollReveal";
import useViewportVisibility from "./hooks/useViewportVisibility";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  useScrollReveal(); // Activate the scroll reveal hook
  useViewportVisibility();
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero className="section" />
        <About className="section" />
        <Skills className="section" />
        <Projects className="section" />
        <Certificates className="section" />
        <Contact className="section" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
