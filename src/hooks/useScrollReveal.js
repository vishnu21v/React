import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const ratio = entry.intersectionRatio;
          const el = entry.target;

          if (ratio >= 0.5) {
            el.style.opacity = "1";
          } else if (ratio >= 0.25) {
            el.style.opacity = "0.9";
          } else if (ratio >= 0.2) {
            el.style.opacity = "0.8";
          } else if (ratio >= 0.1) {
            el.style.opacity = "0.6";
          } else {
            el.style.opacity = "0";
          }

          if (ratio > 0) {
            el.classList.add("visible");
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.25, 0.5]
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
