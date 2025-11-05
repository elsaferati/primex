import React from "react";
import "../styles/Services.css";


import working from "../videos/working.mp4";
import working2 from "../videos/working2.mp4";
import working3 from "../videos/working3.mp4";

function Services() {
  // Each section uses its own video
  const sections = [
    {
      title: "Software Developer & IT Support",
      description:
        "Our team delivers tailored software solutions, integrating VIRTUAL AGENTS to collaborate with people on tasks like order processing, customer service, logistics, and data management — boosting efficiency, success, and cyber security.",
      video: working,
    },
    {
      title: "E-Commerce",
      description:
        "With extensive experience, our skilled developers create customized e-commerce websites designed to effectively promote your brand. We focus on delivering tailored solutions that enhance your brand’s online presence and drive business growth.",
      video: working2,
    },
    {
      title: "Sales and Bookkeeping",
      description:
        "PrimEx offers comprehensive sales services, including global wholesale and retail sales management, production planning, and logistics organization. We also provide advanced e-commerce solutions (B2B and B2C), ensuring seamless transactions and exceptional customer care. For bookkeeping, PrimEx delivers efficient and accurate financial management services, including transaction recording, financial reporting, and compliance with accounting standards. Our expertise ensures that your financial operations run smoothly, allowing you to focus on growth and profitability.",
      video: working3,
    },
    {
      title: "Assistant Administrator",
      description:
        "Our administrative services are designed to optimize business workflows. From conducting in-depth research and generating insightful reports to managing key communications and scheduling, we take care of essential administrative tasks. Whether it’s preparing correspondence, organizing meetings, or coordinating calls, our expert team ensures that every detail is handled with professionalism and efficiency.",
      video: working,
    },
    {
      title: "Graphic Designer",
      description:
        "Our team of experienced designers is dedicated to creating stunning, high-quality designs that not only meet your needs but exceed expectations. We prioritize creativity, attention to detail, and fast turnaround times to ensure your projects are completed efficiently without compromising on quality. Whether you need branding, web design, or marketing materials, we deliver exceptional results tailored to your vision.",
      video: working2,
    },
  ];

  return (
    <section id="services" className="services-wrapper">
      {/* Header section */}
      <div className="services-header">
        <h1>What we do</h1>
        <p>We take a thoughtful and intentional approach to everything we do.</p>
      </div>

      {/* Services sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`service-section ${
            index % 2 === 0 ? "left-text" : "right-text"
          }`}
        >
          {/* Background video */}
          <video
            className="background-video single"
            src={section.video}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlays */}
          <div className="overlay"></div>
          <div className="blue-glow"></div>

          {/* Text */}
          <div className="service-content">
            <h2 className="service-title">{section.title}</h2>
            <p className="service-description">{section.description}</p>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Services;