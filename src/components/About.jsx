import React from "react";



import { useEffect, useRef } from "react";

const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const revealRef = useReveal();

<section ref={revealRef} className="section reveal"></section>

const About = () => {
  return (
    <section id="about" className="section revel" ref={revealRef} >
      <div className=" About">
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
