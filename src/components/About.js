import React from "react";
import "../styles/About.css";
import aboutImg from "../images/agent.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Image on the left */}
        <div className="about-img">
          <img src={aboutImg} alt="About PrimEx" />
        </div>

        {/* Text on the right */}
        <div className="about-text">
          <h5>ABOUT US</h5>
          <h2>Hi, we are <span>PrimEx</span></h2>
          <p>
            PrimEx is a family-tradition company with over 40 years of experience 
            in the furniture industry, combining its long-standing expertise with 
            technological innovation. For more than 12 years, it has been successfully 
            operating as a strategic partner in Germany, Austria, and Switzerland (DACH), 
            supporting manufacturers, wholesalers, and retailers with customized solutions.
          </p>
          <p>
            With AI Agents, it offers companies new ways to place orders, manage complaints, 
            integrate systems, and communicate effectively. Its mission is clear — to increase 
            efficiency, reduce costs, and empower businesses with reliable and customized 
            artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;






