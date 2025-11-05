import React, { useState } from "react";
import "../styles/ApplyForm.css";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  return (
    <section id="apply" className="apply-section">
      <div className="apply-container">
        <h2 className="apply-title">Join Our Team</h2>
        <p className="apply-subtitle">
          Fill out the form below to apply for a position with us.
        </p>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select a position</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join us?</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="apply-btn">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;
