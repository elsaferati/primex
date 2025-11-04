import React, { useState } from "react";
import "../styles/Contact.css";
import ContactMap from "./ContactMap"; // ✅ import your Google Map component

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Reach Out to Us</h2>

        {/* Buttons */}
        <div className="contact-buttons">
          <a href="mailto:info@primexeu.com" className="contact-btn">
            <span>📧</span> Mail Us
          </a>
          <a href="tel:+38349937863" className="contact-btn">
            <span>📞</span> Make a Call
          </a>
        </div>

        {/* Visit info */}
        <div className="visit-box">
          <h3>Visit Us</h3>
          <p>Zona Industriale Fushë Kosovë, Rr. 7 Shtatori Nr. 12</p>
          <p>Fushë Kosovë, Republic of Kosovo</p>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* ✅ Google Map below the form */}
        <div className="contact-map-wrapper">
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

export default Contact;






