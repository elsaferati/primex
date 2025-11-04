import React, { useRef } from "react";
import "../styles/Partners.css";

// Import partner images
import partner1 from "../images/partner1.jpg";
import partner2 from "../images/partner2.jpg";
import partner3 from "../images/partner3.jpg";
import partner4 from "../images/partner4.jpg";
import partner5 from "../images/partner5.jpg";
import partner6 from "../images/partner6.jpg";
import partner7 from "../images/partner7.png";

function Partners() {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

  // Reference to the logos container
  const containerRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -120, behavior: "smooth" });
  };

  // Scroll right
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 120, behavior: "smooth" });
  };

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>

        {/* Partner Logos */}
        <div className="partners-logos" ref={containerRef}>
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner} alt={`Partner ${index + 1}`} className="partner-image" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="partners-nav">
          <button className="nav-button" onClick={scrollLeft}>
            <span className="nav-icon">←</span>
          </button>
          <button className="nav-button" onClick={scrollRight}>
            <span className="nav-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Partners;



