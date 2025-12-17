import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  useScrollReveal();
  return (
    <section id="about" className="section reveal">
      <div className="About">
        <h2 className="section-title">About</h2>
        <p>
          I'm an AI / Data / Web enthusiast currently studying and building
          projects in React, Python, ML, and academic assignments (classification,
          KNN, decision trees, Flask apps, etc.). I like making things look clean
          and easy to use.
        </p>
        <p>
          Right now I'm focusing on: React + Vite, REST APIs, and deploying small
          apps.
        </p>
      </div>
    </section>
  );
};

export default About;
