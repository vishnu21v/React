import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    // Initially hide all sections
    sections.forEach(section => section.classList.add("hidden"));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a staggered delay based on index
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target); // Reveal only once
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
