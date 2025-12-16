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
    { name: "Github", icon: faGithub }, // duplicate for scroll
  ];

  return (
    <section className="sec edu" id="skills">
      <div className="container skills">
        <div className="scroller" data-animated="true">
          <ul className="scroller_content">
            {skills.map((skill, index) => (
              <li key={index}>
                <div>
                  <FontAwesomeIcon icon={skill.icon} size="4x" />
                </div>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
