import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));

    // Initialize all sections
    sections.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const index = sections.indexOf(el);

          if (entry.isIntersecting) {
            // Reveal with staggered delay
            el.style.transitionDelay = `${index * 0.2}s`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          } else {
            // Hide when scrolling out of viewport
            el.style.transitionDelay = `0s`;
            el.style.opacity = "0";
            el.style.transform = "translateY(50px)";
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
