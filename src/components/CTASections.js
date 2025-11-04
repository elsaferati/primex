import React from "react";
import "../styles/CTASections.css";

function CTASections() {
  return (
    <div className="cta-wrapper" data-name="cta-sections" data-file="components/CTASections.js">
      {/* ---- First CTA Section ---- */}
      <section className="cta-section light">
        <div className="cta-container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Let’s talk business</h2>
              <p>
                Ready to take your business to the next level? Partner with us
                for innovative solutions tailored to your goals.
              </p>
              <button className="cta-btn">Apply Now</button>
            </div>
            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
                alt="Business"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Second CTA Section ---- */}
      <section className="cta-section gray">
        <div className="cta-container">
          <div className="cta-box reverse">
            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team"
              />
            </div>
            <div className="cta-content">
              <h2>Apply for work</h2>
              <p>
                Join our talented team and contribute to exciting projects with
                cutting-edge technologies and collaborative innovation.
              </p>
              <button className="cta-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTASections;

