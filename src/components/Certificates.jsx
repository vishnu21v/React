import React, { useEffect, useRef, useState } from "react";

const certificates = [
  {
    title: "Python Basics",
    img: "https://live.staticflickr.com/65535/53899268518_3575c933be.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/SSSMYYZBFZGG",
  },
  {
    title: "Machine Learning Certificate",
    img: "https://live.staticflickr.com/65535/53899235528_414cab1796.jpg",
    link: "https://www.linkedin.com/posts/vishnu02v_completion-certificate-on-machine-learning-activity-7020236564999925760-5WJA?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Foundation of User Experience (UX) Design",
    img: "https://live.staticflickr.com/65535/53899585713_3cdac9e60c_w.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/RQ976Q5JK4F6",
  },
];

export default function Certificates() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const speed = 0.3; // pixels per frame (adjust for 8s per card approx)

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (!isPaused && trackRef.current) {
        const track = trackRef.current;
        const totalWidth = track.scrollWidth / 2; // because we duplicate items
        let newOffset = offset + speed;
        if (newOffset >= totalWidth) {
          newOffset = 0; // reset to start
        }
        setOffset(newOffset);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [offset, isPaused]);

  // Duplicate items for infinite effect
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section className="sec" id="certificate">
      <div
        className="certificates-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="certificates-track"
          ref={trackRef}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {duplicatedCertificates.map((cert, i) => (
            <div className="cerholder flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={cert.img} alt={cert.title} className="cerimg" />
                </div>
                <div className="flip-card-back">
                  <h1>Certificate</h1>
                  <h2>{cert.title}</h2>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    For more details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
