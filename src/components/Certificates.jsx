import React, { useEffect, useRef } from "react";

const certificates = [
  {
    title: "Python Basics",
    img: "https://live.staticflickr.com/65535/53899268518_3575c933be.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/SSSMYYZBFZGG",
  },
  {
    title: "Machine Learning",
    img: "https://live.staticflickr.com/65535/53899235528_414cab1796.jpg",
    link: "#",
  },
  {
    title: "UX Design",
    img: "https://live.staticflickr.com/65535/53899585713_3cdac9e60c_w.jpg",
    link: "#",
  },
];

export default function Certificates({ className }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const speed = 0.35; // scrolling speed
    const gap = 32;
    const cardWidth = 400 + gap;

    // Clone the first few cards to prevent gap
    const clones = Array.from(track.children).map((child) => child.cloneNode(true));
    clones.forEach((clone) => track.appendChild(clone));

    const animate = () => {
      if (!isPausedRef.current) {
        offsetRef.current -= speed;
        track.style.transform = `translateX(${offsetRef.current}px)`;

        if (Math.abs(offsetRef.current) >= cardWidth) {
          const first = track.children[0];
          track.appendChild(first);
          offsetRef.current += cardWidth;
          track.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section id="certificates" className={`${className}`}>
      <h2 className="section-title">Certificates</h2>

      <div
        className="cer-slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cer-track" ref={trackRef}>
          {certificates.map((cert, i) => (
            <div className="cer-item" key={i}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={cert.img} alt={cert.title} className="cerimg" />
                  </div>

                  <div className="flip-card-back">
                    <h2>{cert.title}</h2>
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      View Certificate →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
