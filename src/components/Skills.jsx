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
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-pill">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
