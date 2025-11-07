import React, { useState, useEffect } from "react";
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

  const [countries, setCountries] = useState([]);

useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      const countryList = data
        .map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));

      setCountries(countryList);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setCountries(["Error loading countries"]);
    }
  };

  fetchCountries();
}, []);


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
    <section className="af-section">
      <div className="af-container">
        <div className="af-text">
          <h4>CONTACT US</h4>
          <h2>Let’s discuss your next project.</h2>
        </div>

        <form className="af-form" onSubmit={handleSubmit}>
          <div className="af-form-row">
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

          <div className="af-form-row">
            <input
              type="text"
              name="company"
              placeholder="Phone Number"
              value={formData.company}
              onChange={handleChange}
            />

            {/* Dynamic country dropdown */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {countries.length > 0 ? (
                countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>

          <textarea
            name="description"
            placeholder="Project Description..."
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <div className="af-privacy">
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

          <button type="submit" className="af-btn">
            CONTACT US
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;
