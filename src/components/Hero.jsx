import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="tag">Hi, I'm Vishnu Vaitheeswaran👋</p>
        <h1>Frontend & AI Developer </h1>
        <p className="subtitle">
          I build web apps, data/ML mini projects, and clean UI components.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-photo">
        {/* replace with your image */}
        <div className="hero-avatar">V</div>
      </div>
    </section>
  );
};

export default Hero;
