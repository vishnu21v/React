import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".section");

    // Start all sections hidden
    elements.forEach(el => {
      el.classList.add("hidden");
      el.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          const el = entry.target;
          const ratio = entry.intersectionRatio;

          // Gradually adjust opacity based on visibility
          if (ratio >= 0.5) el.style.opacity = "1";
          else if (ratio >= 0.25) el.style.opacity = "0.9";
          else if (ratio >= 0.2) el.style.opacity = "0.8";
          else if (ratio >= 0.1) el.style.opacity = "0.6";
          else el.style.opacity = "0";

          // If element is visible at all
          if (ratio > 0) {
            el.classList.add("visible");
            el.classList.remove("hidden");

            // Add staggered delay based on index
            el.style.transitionDelay = `${index * 0.2}s`;

            // Slide-up effect
            el.style.transform = "translateY(0)";
            
            // Stop observing after first reveal
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.25, 0.5],
        rootMargin: "-30% 0px -30% 0px"
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
