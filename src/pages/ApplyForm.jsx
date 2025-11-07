import React, { useState, useEffect } from "react";
import "../styles/ApplyForm.css";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    linkedin: "",
    country: "",
    description: "",
    privacyAccepted: false,
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const countryList = data
          .map((country) => country.name?.common || country.name)
          .sort((a, b) => a.localeCompare(b));

        setCountries(countryList);
        setError(null);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries");
        setCountries([]);
      } finally {
        setLoading(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      alert("Please accept the privacy policy before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-apply-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          linkedin: "",
          country: "",
          description: "",
          privacyAccepted: false,
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ An error occurred. Please try again later.");
    }
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
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="af-form-row">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {loading && <option disabled>Loading countries...</option>}
              {error && <option disabled>{error}</option>}
              {!loading &&
                !error &&
                countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
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
