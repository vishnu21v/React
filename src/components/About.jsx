import React, { useEffect } from "react";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // reveal only once
          }
        });
      },
      { threshold: 0.2 }
    );

        elements.forEach((el, index) => {
      observer.observe(el);
      // Optional: stagger using CSS delay
      el.style.transitionDelay = `${index * 0.5 + 3}s`; // 3s base + 0.5s per item
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section ">
      <div className="About">
        <h2 className="section-title reveal">About</h2>
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
