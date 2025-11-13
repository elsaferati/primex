import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProjectDetails.css";
import project1 from "../images/agent.jpg";
import extra1 from "../images/agent.jpg";
import extra2 from "../images/agent.jpg";

const projects = {
  "reach-talent": {
    title: "Reach Talent",
    image: project1,
    overview: `Reach Talent simplifies flexible talent management for companies with an all-in-one platform. 
    We were approached to create a purposeful brand strategy and architecture, unifying the brand identity 
    to support organizational growth. The visual identity reflects professionalism, encouragement, and quality.`,
    details: [
      "Brand Strategy",
      "Brand Architecture",
      "Content Strategy",
      "Visual Identity",
      "Design System",
      "Dynamic Guidelines",
      "UX Strategy",
      "UI Design",
      "Prototyping",
    ],
    extraImages: [extra1, extra2],
  },

  "business-dashboard": {
    title: "Business Dashboard",
    image: project1,
    overview:
      "A complete sales and analytics dashboard that gives real-time insights into business performance.",
    details: ["UI/UX Design", "Dashboard Visualization", "Data Security"],
    extraImages: [extra1],
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project Not Found</h2>
        <Link to="/our-work">← Back to Our Work</Link>
      </div>
    );
  }

  return (
    <section className="project-details">
      <div className="hero">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="content">
        <h1 className="project-title">{project.title}</h1>

        <h2>Overview</h2>
        <p>{project.overview}</p>

        <h2>Details</h2>
        <ul>
          {project.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="extra-images">
          {project.extraImages.map((img, index) => (
            <img key={index} src={img} alt={`extra-${index}`} />
          ))}
        </div>

        <Link to="/our-work" className="back-link">
          ← Back to Our Work
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetails;
