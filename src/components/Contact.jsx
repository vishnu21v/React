import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p>Want to collaborate? Drop a message.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea rows="4" placeholder="Your message" required />
        <button className="btn primary" type="submit">
          Send
        </button>
      </form>
      <p className="contact-inline">
        Or mail me at <a href="mailto:vishnuvaitheeswaran2002@gmail.com">vishnuvaitheeswaran2002@gmail.com</a>
      </p>
    </section>
  );
};

export default Contact;
