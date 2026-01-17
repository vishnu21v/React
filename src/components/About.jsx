import React from "react";
import { motion } from "framer-motion";


const sectionVariants = {
  hidden: {
    opacity: 0.02,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.18,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const waveVariants = {
  initial: { rotate: 0 },
  wave: {
    rotate: [0, 10, -8, 10, -4, 0],
    transition: {
      duration: 2.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};


const About = ({ className }) => {
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

        <motion.p variants={textVariants}>
          I'm an AI / Data / Web enthusiast currently studying and building
          projects in React, Python, ML, and academic assignments (classification,
          KNN, decision trees, Flask apps, etc.). I like making things look clean
          and easy to use.
        </motion.p>

        <motion.p variants={textVariants}>
          Right now I'm focusing on: React + Vite, REST APIs, and deploying small
          apps.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
