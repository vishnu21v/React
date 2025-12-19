import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    // Initially hide all sections
    sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      let previousRevealed = true; // Allow the first section to reveal immediately

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const revealPoint = windowHeight * 0.85; // Reveal when 15% of section is visible from bottom

        if (previousRevealed && rect.top < revealPoint) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
          previousRevealed = true; // This section is now revealed
        } else {
          previousRevealed = false; // Stop revealing further sections until this one is fully visible
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Trigger on mount in case some sections are already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
}
