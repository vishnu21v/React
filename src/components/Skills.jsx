import React from "react";
import "./Skills.css";

const skills = [
  { name: "GitHub", icon: "fa-github" },
  { name: "Flickr", icon: "fa-flickr" },
  { name: "HTML", icon: "fa-html5" },
  { name: "CSS", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "Python", icon: "fa-python" },
  { name: "Java", icon: "fa-java" },
  { name: "Figma", icon: "fa-figma" },
  { name: "Git", icon: "fa-git-alt" },
];

const Skills = () => {
  return (
    <section className="sec edu" id="skills">
      <div className="container skills">
        <h2 className="section-title">Skills</h2>

        <div className="scroller" data-animated="true">
          <ul className="scroller_content">
            {[...skills, ...skills].map((skill, index) => (
              <li key={index} className="skill-item">
                <div>
                  <i className={`fa-brands ${skill.icon}`}></i>
                </div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
