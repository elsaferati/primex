// src/pages/OurWork.js
import React from "react";
import WorkCard from "../components/WorkCard";
import "../styles/OurWork.css";

// Import your images
import project1 from "../images/agent.jpg";
import project2 from "../images/agent.jpg";
import project3 from "../images/agent.jpg";
import project4 from "../images/agent.jpg";

function OurWork() {
  const works = [
    {
      image: project1,
      title: "E-Commerce Platform Redesign",
      description:
        "We transformed a local retail store’s online presence with a fully responsive e-commerce website, optimized for conversions and fast checkout.",
    },
    {
      image: project2,
      title: "Business Management Dashboard",
      description:
        "A custom-built dashboard for tracking sales, inventory, and employee performance. Built with secure authentication and real-time analytics.",
    },
    {
      image: project3,
      title: "Creative Branding & Visual Identity",
      description:
        "Developed a complete visual identity package — including logos, brand colors, and digital marketing materials — for a startup brand.",
    },
    {
      image: project4,
      title: "AI-Powered Support Assistant",
      description:
        "Built an intelligent virtual assistant that helps automate customer support and scheduling through smart chat and email integration.",
    },
  ];

  return (
    <section className="ourwork-wrapper">
      <div className="ourwork-header">
        <h1>Our Work</h1>
        <p>
          Explore some of the projects we've delivered — combining innovation,
          creativity, and technology to help our clients grow.
        </p>
      </div>

      <div className="ourwork-grid">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
}

export default OurWork;
