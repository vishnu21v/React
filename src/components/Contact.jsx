import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">

      <h2 className="section-title">Contact</h2>
      <p>Want to collaborate? Drop a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          Message sent! I'll get back to you.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Something went wrong. Try again later.
        </p>
      )}

      <p className="contact-inline" style={{ marginTop: "1rem" }}>
        Or mail me at{" "}
        <a href="mailto:vishnuvaitheeswaran2002@gmail.com">
          vishnuvaitheeswaran2002@gmail.com
        </a>
      </p>
      </div>
    </section>
  );
};

export default Contact;
