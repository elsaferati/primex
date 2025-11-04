import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* Left side - Text */}
        <div className="about-text">
          <h2>
            Hi, we are <span>PrimEx</span>
          </h2>
          <p>
            PrimEx is a family-tradition company with over 40 years of experience
            in the furniture industry, which has combined its long-standing
            experience with technological innovation. For more than 12 years, it
            has been successfully operating as a strategic partner in Germany,
            Austria, and Switzerland DACH, supporting manufacturers, wholesalers,
            and retailers with customized solutions.
          </p>
          <p>
            With AI Agents, it offers companies how they place orders, manage
            complaints, integrate and communicate. Its mission is clear: to
            increase efficiency, reduce costs, and empower businesses with
            reliable and customized artificial intelligence.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png"
            alt="AI Agents"
          />
          <div className="about-logo">PrimEx</div>
        </div>
      </div>
    </section>
  );
}

export default About;



