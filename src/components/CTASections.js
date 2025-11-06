import React from "react";
import "../styles/CTASections.css";
import { useNavigate } from "react-router-dom";

import applyImg from "../images/apply.png";
import teamImg from "../images/team-join-thumb-2-1.png";
import teamWork from "../images/team-work-dark.png";

function CTASections() {
  const navigate = useNavigate();

  return (
    <div className="cta-wrapper">
      {/* ---- First CTA Section ---- */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box light">
            <div className="cta-content">
              <h5 className="cta-subtitle">Let's be partners</h5>
              <h2 className="cta-title">Let's talk business</h2>
              <p className="cta-text">Become part of our family.</p>
              <p className="cta-text">Let's work together</p>

              {/* Navigate to /apply page */}
              <button
                className="cta-btn"
                onClick={() => navigate("/business-apply")}
              >
                Apply Now
              </button>
            </div>

            <div className="cta-image">
              <img src={applyImg} alt="Business teamwork" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Divider ---- */}
      <div className="cta-divider">
        <img src={teamWork} alt="Graphic Designer" className="divider-image" />
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

              {/* Navigate to /apply page */}
              <button
                className="cta-btn large"
                onClick={() => navigate("/apply")}
              >
                Apply Now
              </button>
            </div>

            <div className="cta-image">
              <img src={teamImg} alt="Apply illustration" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTASections;
