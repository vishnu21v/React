import { useEffect } from "react";

export function useScrollReveal(threshold = 0.06) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // reveal only once
          }
        });
      },
      { threshold } // 0.06 = 6% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [threshold]);
}
