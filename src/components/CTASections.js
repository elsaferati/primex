import React from "react";
import "../styles/CTASections.css";

function CTASections() {
  return (
    <div
      className="cta-wrapper"
      data-name="cta-sections"
      data-file="components/CTASections.js"
    >
      {/* ---- First CTA Section ---- */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box light">
            <div className="cta-content center">
              <h5 className="cta-subtitle">Let's be partners</h5>
              <h2 className="cta-title">Let's talk business</h2>
              <p className="cta-text">Become part of our family.</p>
              <p className="cta-text">Let's work together</p>
              <button className="cta-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bubble Divider ---- */}
      <div className="cta-divider">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
          alt="Graphic Designer"
          className="divider-image"
        />
        <div className="divider-overlay"></div>
        <div className="divider-text">
          We don’t believe in chance.
          <br />
          We believe in people.
          <br />
          And together, we create opportunity.
        </div>
      </div>

      {/* ---- Second CTA Section ---- */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box dark">
            <div className="cta-left">
              <p className="cta-subtitle">Join with us</p>
              <h2 className="cta-title">Apply for work</h2>
            </div>
            <div className="cta-right">
              <button className="cta-btn large">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Second Divider ---- */}
      <div className="cta-divider black">
        <div className="divider-text narrow">
          Success is no accident. It is hard work, perseverance, learning,
          studying, sacrifice and most of all, love of what you are doing or
          learning to do.
        </div>
      </div>
    </div>
  );
}

export default CTASections;
