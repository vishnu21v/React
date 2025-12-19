import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    // Initially hide all sections except top ones
    sections.forEach((section, index) => {
      section.style.opacity = 0;
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const revealPoint = windowHeight * 0.85; // 15% from bottom

        if (rect.top < revealPoint) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
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
