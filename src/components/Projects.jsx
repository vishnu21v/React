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

const SLIDE_DELAY = 5000; // Slide interval
const GAP = 32; // Must match CSS gap

const Projects = ({ className }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Measure slide width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth + GAP);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, SLIDE_DELAY);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [index]);

  return (
    <section id="projects" className={`projects-section ${className || ""}`}>
      <h2 className="section-title">Projects</h2>

      <div
        className="projects-slider"
        onMouseEnter={clearTimer}
        onMouseLeave={startTimer}
      >
        <div
          className="projects-track"
          style={{
            transform: `translateX(-${index * slideWidth}px)`,
          }}
        >
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="project-card"
              ref={i === 0 ? slideRef : null}
            >
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

      <div className="slider-dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
