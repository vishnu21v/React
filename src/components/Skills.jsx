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



  return (
    <section className="section" id="skills">
      <div className="Projects">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="container skills">
        <div className="scroller" data-animated="true">
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


export default Skills;
