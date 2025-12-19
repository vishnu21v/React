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

export default function Certificates() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const position = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const speed = 0.4; // pixels per frame (controls smoothness)

    const animate = () => {
      position.current -= speed;
      track.style.transform = `translateX(${position.current}px)`;

      const first = track.children[0];
      const firstWidth = first.offsetWidth + 32; // card width + gap

      if (Math.abs(position.current) >= firstWidth) {
        track.appendChild(first);
        position.current += firstWidth;
        track.style.transform = `translateX(${position.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section id="certificate" className="sec">
      <h2 className="section-title">Certificates</h2>

      <div className="cer-slider">
        <div className="cer-track" ref={trackRef}>
          {certificates.map((cert, i) => (
            <div className="cer-item" key={i}>
              <img src={cert.img} alt={cert.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
