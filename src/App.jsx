import React from "react";
import useScrollReveal from "./hooks/useScrollReveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useScrollReveal(); // Activate the scroll reveal hook

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero className="section" />
        <About className="section" />
        <Skills className="section" />
        <Projects className="section" />
        <Contact className="section" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
