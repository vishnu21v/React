import React from "react";

const Contact = ({ className }) => {
  return (
    <section id="contact" className={`${className}`}>
      <div className="Contact">
        <div className="top">
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="center">
          <ul className="bottomnav vertical">
            <li><a href="#home" className="silky-vertical">Home</a></li>
            <li><a href="#about" className="silky-vertical">About</a></li>
            <li><a href="#skills" className="silky-vertical">Skills</a></li>
            <li><a href="#projects" className="silky-vertical">Projects</a></li>
            <li><a href="#certificates" className="silky-vertical">Certificates</a></li>
          </ul>


          <div className="contact-buttons">
            <a
              href="tel:+61477317492"
              className="contact-btn"
            >

              📞 
            </a>

            <a
              href="mailto:vishnuvaitheeswaran2002@gmail.com"
              className="contact-btn"
            >
              ✉️ 
            </a>

            <a
              href="https://linkedin.com/in/vishnu-vaitheeswaran"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              🔗 
            </a>

            <a
              href="https://github.com/vishnu21v"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              💻 
            </a>

            <a
              href="https://wa.me/+61477317492"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              💬 
            </a>
         </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
