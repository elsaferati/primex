import React, { useState } from "react";
import "../styles/OurPeople.css";
import partner1 from "../images/partner1.jpg";

const teamData = {
  "Executive Team": [
    {
      name: "Ismael Peinado",
      title: "Chief Technology Officer",
      image: partner1,
    },
    {
      name: "Carlos Aguirre",
      title: "Chief Financial Officer",
      image: partner1,
    },
    {
      name: "Megan Amdahl",
      title: "Chief Customer Officer",
      image: partner1,
    },
  ],
  "Executive Business Leaders": [
    {
      name: "John Smith",
      title: "VP of Operations",
      image: partner1,
    },
    {
      name: "Jane Doe",
      title: "VP of Marketing",
      image: partner1,
    },
    {
      name: "Robert Lee",
      title: "VP of Strategy",
      image: partner1,
    },
  ],
  "Product Owners": [
    {
      name: "Emily Carter",
      title: "Product Owner",
      image: partner1,
    },
    {
      name: "Michael Ross",
      title: "Product Owner",
      image: partner1,
    },
  ],
  "Design Team": [
    {
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      image: partner1,
    },
    {
      name: "Liam Brown",
      title: "Graphic Designer",
      image: partner1,
    },
  ],
  Developers: [
    {
      name: "Anna Green",
      title: "Frontend Developer",
      image: partner1,
    },
    {
      name: "David Kim",
      title: "Backend Developer",
      image: partner1,
    },
    {
      name: "Sofia Lopez",
      title: "Full Stack Developer",
      image: partner1,
    },
  ],
};

const OurPeople = () => {
  const [activeTab, setActiveTab] = useState("Executive Team");

  return (
    <div className="our-people-container">
      <nav className="people-nav">
        {Object.keys(teamData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <h2 className="section-title">{activeTab}</h2>
      <div className="people-grid">
        {teamData[activeTab].map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
