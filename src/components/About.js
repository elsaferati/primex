import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import aboutImg from "../images/agent.jpg";

function About() {
  const imageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up"); // slide up when in view
          } else {
            entry.target.classList.remove("animate-up"); // remove when out of view
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageElement = imageRef.current;
    const textElement = textRef.current;

    if (imageElement) observer.observe(imageElement);
    if (textElement) observer.observe(textElement);

    return () => {
      if (imageElement) observer.unobserve(imageElement);
      if (textElement) observer.unobserve(textElement);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-img" ref={imageRef}>
          <img src={aboutImg} alt="About PrimEx" />
        </div>

        <div className="about-text" ref={textRef}>
          <h5>ABOUT US</h5>
          <h2>
            Hi, we are <span>PrimEx</span>
          </h2>
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
