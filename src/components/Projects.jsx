import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Deepfake Detection",
    desc: ["Built a web-based application to detect whether an uploaded image is real or deepfake using a machine learning model.",
      "Implemented a clean, single-page user interface for seamless image upload and instant prediction results.",
      "Developed the backend using Flask to manage image uploads, preprocessing, and model inference.",
      "Integrated Python-based machine learning pipelines for feature extraction and classification.",
      "Optimized the application for fast response times and smooth user experience.",
      "Designed the system with scalability in mind to support future deep learning or video-based detection.",
      "Maintained a modular and well-structured codebase suitable for deployment and further experimentation."
    ],
    tech: ["Python", "Flask", "Machine Learning"],
    link: "https://github.com/vishnu21v/Deep-Fake-Detection"
  },
  {
    title: "Clothing Review Recommender",
    desc: "Discover clothing you'll love! This NLP-driven system analyzes user reviews, matches preferences with TF-IDF and cosine similarity, and serves recommendations via a Flask API. Responsive frontend for a smooth experience.",
    tech: ["Python", "NLP", "Flask"],
    link: "#",
  },
  {
    title: "Pymon Game (OOP)",
    desc: "A Python adventure game featuring CSV-powered data, interactive menus, and modular OOP design. Explore locations, manage your team, and enjoy a user-friendly interface built for easy expansion.",
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
                <ul className="project-desc">
                  {p.desc.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

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
