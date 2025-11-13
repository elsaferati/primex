// src/components/WorkCard.js
import React from "react";
import "../styles/WorkCard.css";

function WorkCard({ image, title, description }) {
  return (
    <div className="work-card">
      <div className="work-image">
        <img src={image} alt={title} />
      </div>
      <div className="work-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="work-btn">Learn More</button>
      </div>
    </div>
  );
}

export default WorkCard;
