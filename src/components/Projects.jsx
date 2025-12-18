import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Deepfake Detection (Flask + ML)",
    desc: "Upload image, model checks real/fake, single-page UI.",
    tech: ["Flask", "Python", "ML"],
    link: "#",
  },
  {
    title: "Clothing Review Recommender",
    desc: "NLP pipeline, vectorizer, recommend clothing items.",
    tech: ["Python", "NLP", "Flask"],
    link: "#",
  },
  {
    title: "Pymon Game (OOP)",
    desc: "Python game with CSV import, menus, locations.",
    tech: ["Python", "OOP"],
    link: "#",
  },
];

const Projects = ({ className }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 10000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section id="projects" className={className}>
      <div className="projects">
        <h2 className="section-title">Projects</h2>

        {/* Slider */}
        <div
          className="projects-slider"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="projects-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={p.link} className="project-link">
                  View repo →
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="slider-dots">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
