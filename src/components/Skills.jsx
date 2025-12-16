import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFlickr,
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faJava,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const skills = [
    { name: "Github", icon: faGithub },
    { name: "Flickr", icon: faFlickr },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JS", icon: faJs },
    { name: "Python", icon: faPython },
    { name: "Java", icon: faJava },
    { name: "Figma", icon: faFigma },
    { name: "Git", icon: faGitAlt },
  ];

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="container skills">
        <div className="scroller">
          <ul className="scroller_content">
            {[...skills, ...skills].map((skill, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={skill.icon} />
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
