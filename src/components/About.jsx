import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriterText";

// ── Animation Variants ──────────────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.18,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

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

// ── Component ────────────────────────────────────────────────────────────────
const About = ({ className }) => {
  const typedRole = useTypewriter("Frontend & AI Developer", 70);

  return (
    <motion.section
      id="about"
      className={`${className} reveal`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="About">
        <motion.h2
          className="section-title"
          variants={textVariants}
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
        </motion.h2>

        {/* Typewriter role line */}
        <motion.p
          variants={textVariants}
          style={{
            fontWeight: 500,
            letterSpacing: "0.08em",
            opacity: 0.85,
          }}
        >
          {typedRole}
        </motion.p>

        <motion.p variants={textVariants}>
          I'm an AI / Data / Web enthusiast currently studying and building
          projects in React, Python, ML, and academic assignments
          (classification, KNN, decision trees, Flask apps, etc.). I like
          making things look clean and easy to use.
        </motion.p>

        <motion.p variants={textVariants}>
          Right now I'm focusing on: React + Vite, REST APIs, and deploying
          small apps.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;