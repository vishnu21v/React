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

const SLIDE_DELAY = 8000; // 8 seconds
const GAP = 32; // matches CSS

export default function Certificates() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Measure the width of a slide
  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, SLIDE_DELAY);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [index]);

  return (
    <section className="sec" id="certificate">
      <div className="container cer">
        <div
          className="certificates-slider"
          onMouseEnter={clearTimer}
          onMouseLeave={startTimer}
        >
          <div
            className="certificates-track"
            style={{ transform: `translateX(-${index * (slideWidth + GAP)}px)` }}
          >
            {certificates.map((cert, i) => (
              <div
                className="cerholder flip-card"
                key={i}
                ref={i === 0 ? slideRef : null}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="cerimg"
                    />
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
      </div>
    </section>
  );
}
