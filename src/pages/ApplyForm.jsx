import React, { useState } from "react";
import "../styles/ApplyForm.css";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    description: "",
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert("Please accept the privacy policy before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      description: "",
      privacyAccepted: false,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h4>CONTACT US</h4>
          <h2>Let’s discuss your next project.</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="description"
            placeholder="Project Description..."
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <div className="privacy-check">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
            />
            <label>
              I accept the <span>Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="contact-btn">
            CONTACT US
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;

