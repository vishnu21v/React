import React, { useEffect, useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Certificates({ className }) {
  useScrollReveal();

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

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
    <section
      id="certificates"
      className={`${className || ""} reveal`}
    >
      <div className="Certificates">
        <h2 className="section-title">Certificates</h2>

        <div
          className="Certificates-slider"
          onMouseEnter={clearTimer}
          onMouseLeave={startTimer}
        >
          <div
            className="Certificates-track"
            style={{
              transform: `translateX(-${index * (slideWidth + GAP)}px)`,
            }}
          >
            {certificates.map((cert, i) => (
              <div
                key={i}
                ref={i === 0 ? slideRef : null}
                className="Certificates-item flip-card"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="Certificates-img"
                    />
                  </div>

                  <div className="flip-card-back">
                    <h1>Certificate</h1>
                    <h2>{cert.title}</h2>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="Certificates-link"
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
