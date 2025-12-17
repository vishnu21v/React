import React from "react";

const Contact = ({ className }) => {
  return (
    <section id="contact" className={`${className}`}>
      <div className="Contact">
        <h2 className="section-title">Contact</h2>
        <p>Feel free to reach out through any of the platforms below.</p>

        <div className="contact-buttons">
          <a
            href="tel:+614XXXXXXXX"
            className="contact-btn"
          >
            📞 Phone
          </a>

          <a
            href="mailto:vishnuvaitheeswaran2002@gmail.com"
            className="contact-btn"
          >
            ✉️ Email
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/YOUR-GITHUB-USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            💻 GitHub
          </a>

          <a
            href="https://wa.me/614XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
