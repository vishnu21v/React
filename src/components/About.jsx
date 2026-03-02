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
      duration: 5,
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
    transition: { duration: 0.5, ease: "easeOut" },
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
        I'm a Computer Science Engineering graduate currently pursuing a Master's in Artificial Intelligence at the Royal Melbourne Institute of Technology (RMIT). I specialize in software development and modern web development, building clean, scalable, and user-focused solutions. Alongside my studies, I work as a freelance developer, helping startups and small businesses create high-performing websites and applications with a strong focus on usability, performance, and real-world impact.

        </motion.p>

        <motion.p variants={textVariants}>
          Right now I'm focusing on React, REST APIs, and deployingsmall apps.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;