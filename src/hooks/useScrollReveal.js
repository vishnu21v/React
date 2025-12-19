import { useEffect, useState } from "react";

export function useScrollReveal(threshold = 0.06) {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setVisibleSections((prev) => [...prev, entry.target.id]);
            observer.unobserve(entry.target); // reveal only once
          }
        });
      },
      {
        threshold, // 0.06 = 6% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [threshold]);

  return visibleSections;
}
