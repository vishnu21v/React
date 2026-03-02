import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLE_TEXT = "Frontend & AI Developer";

const waveVariants = {
  initial: { rotate: 0 },
  wave: {
    rotate: [0, 22, -10, 22, -5, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut",
    },
  },
};

// Looping typewriter — types forward, pauses, deletes, repeats
const useLoopingTypewriter = (text, typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "deleting"
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, index + 1));
          setIndex((i) => i + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else if (phase === "deleting") {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, index - 1));
          setIndex((i) => i - 1);
        }, deleteSpeed);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, index, text, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
};

const About = ({ className }) => {
  const typedRole = useLoopingTypewriter(ROLE_TEXT, 80, 45, 2000);

  return (
    // No framer-motion on the section — useScrollReveal handles it
    <section id="about" className={`${className}`}>
      <div className="About">

        <h2
          className="section-title"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          About
          <motion.span
            variants={waveVariants}
            initial="initial"
            animate="wave"
            style={{ display: "inline-block" }}
          >
            👋
          </motion.span>
        </h2>

        {/* Looping typewriter role */}
        <p
          style={{
            fontWeight: 500,
            letterSpacing: "0.08em",
            opacity: 0.85,
            minHeight: "1.5em",   /* prevents layout shift when text is empty */
          }}
        >
          {typedRole}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "var(--accent)",
              marginLeft: "2px",
              verticalAlign: "middle",
              animation: "blink 0.8s step-end infinite",
            }}
          />
        </p>

        <p>
          I'm a Computer Science Engineering graduate currently pursuing a
          Master's in Artificial Intelligence at the Royal Melbourne Institute
          of Technology (RMIT). I specialize in software development and modern
          web development, building clean, scalable, and user-focused solutions.
          Alongside my studies, I work as a freelance developer, helping
          startups and small businesses create high-performing websites and
          applications with a strong focus on usability, performance, and
          real-world impact.
        </p>

        <p>
          Right now I'm focusing on React, REST APIs, and deploying small apps.
        </p>

      </div>
    </section>
  );
};

export default About;