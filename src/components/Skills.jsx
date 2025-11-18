import React from "react";

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Flask",
  "Machine Learning basics",
  "Git / GitHub",
  "HTML & CSS",
  "Data Cleaning",
  "NLP fundamentals",
  "Data mining",
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="Skills">
        <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-pill">
            {s}
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Skills;
