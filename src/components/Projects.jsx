import React from "react";

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

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container Projects">
        <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
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
      
    </section>
  );
};

export default Projects;
