import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Elements to animate inside each section
    const CHILD_SELECTORS = [
      ".section-title",
      ".hero-content",
      ".hero-photo",
      ".tag",
      ".subtitle",
      ".hero-actions",
      ".About p",
      ".About h2",
      ".skills-grid",
      ".scroller",
      ".project-card",
      ".project-card-mobile",
      ".projects-track",
      ".projects-mobile-stack",
      ".cer-item",
      ".flip-card",
      ".top",
      ".center",
      ".footer",
    ];

    // Prepare all sections — make them visible containers (no section-level hide)
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.style.opacity = "1";
      section.style.transform = "none";
      section.style.transition = "none";
    });

    // Collect all animatable children across the page
    const allChildren = [];
    CHILD_SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        // Skip if already collected (avoid duplicates from nested selectors)
        if (!allChildren.includes(el)) {
          allChildren.push(el);
        }
      });
    });

    // Set initial hidden state on each child
    const duration = isMobile ? "1s" : "0.65s";
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

    allChildren.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity ${duration} ${easing}, transform ${duration} ${easing}`;
      el.dataset.revealed = "false";
    });

    // Stagger helper — reveal siblings with a delay offset
    const getDelay = (el) => {
      const parent = el.parentElement;
      if (!parent) return 0;
      const siblings = Array.from(parent.children).filter((c) =>
        allChildren.includes(c)
      );
      const idx = siblings.indexOf(el);
      const step = isMobile ? 120 : 80; // ms between each child
      return idx >= 0 ? idx * step : 0;
    };

    const revealEl = (el) => {
      if (el.dataset.revealed === "true") return;
      el.dataset.revealed = "true";
      const delay = getDelay(el);
      el.style.transitionDelay = `${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    // IntersectionObserver — trigger per child element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px", // trigger just before bottom of viewport
        threshold: 0.08,
      }
    );

    allChildren.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}