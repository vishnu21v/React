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
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");
  
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("active");
              }, 3000); // 3 seconds delay
            }
          });
        },
        { threshold: 0.2 }
      );
  
      elements.forEach(el => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
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
