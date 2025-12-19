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
  {
    title: "Google UX",
    img: "https://live.staticflickr.com/65535/53899585713_3cdac9e60c_w.jpg",
    link: "#",
  },
];

export default function Certificates() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const speed = 0.35; // smooth continuous speed
    const gap = 32;
    const cardWidth = 400 + gap;

    const animate = () => {
      offsetRef.current -= speed;
      track.style.transform = `translateX(${offsetRef.current}px)`;

      const first = track.children[0];

      if (Math.abs(offsetRef.current) >= cardWidth) {
        track.appendChild(first);
        offsetRef.current += cardWidth;
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="certificate" className="sec">
      <h2 className="section-title">Certificates</h2>

      <div className="cer-slider">
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
