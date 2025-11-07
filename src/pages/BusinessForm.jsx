import React, { useState } from "react";
import "../styles/BusinessForm.css";

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your business inquiry has been submitted.");
    console.log("Business Inquiry Data:", formData);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "",
      website: "",
      message: "",
    });
  };

  return (
    <section className="bf-section">
      <div className="bf-container">
        <div className="bf-text">
          <h4>BUSINESS INQUIRY</h4>
          <h2>Tell us about your company and project.</h2>
        </div>

        <form className="bf-form" onSubmit={handleSubmit}>
          <div className="bf-form-row">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person *"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bf-form-row">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="bf-form-row">
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Business Type *</option>
              <option value="IT Services">IT Services</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Consulting">Consulting</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="url"
              name="website"
              placeholder="Company Website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="bf-btn">
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
};

export default BusinessForm;
