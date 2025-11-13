import React, { useState } from "react";
import "../styles/OurPeople.css";

const teamData = {
  "Executive Team": [
    {
      name: "Ismael Peinado",
      title: "Chief Technology Officer",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Carlos Aguirre",
      title: "Chief Financial Officer",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Megan Amdahl",
      title: "Chief Customer Officer",
      image: "https://via.placeholder.com/250x250",
    },
  ],
  "Executive Business Leaders": [
    {
      name: "John Smith",
      title: "VP of Operations",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Jane Doe",
      title: "VP of Marketing",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Robert Lee",
      title: "VP of Strategy",
      image: "https://via.placeholder.com/250x250",
    },
  ],
  "Product Owners": [
    {
      name: "Emily Carter",
      title: "Product Owner",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Michael Ross",
      title: "Product Owner",
      image: "https://via.placeholder.com/250x250",
    },
  ],
  "Design Team": [
    {
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Liam Brown",
      title: "Graphic Designer",
      image: "https://via.placeholder.com/250x250",
    },
  ],
  Developers: [
    {
      name: "Anna Green",
      title: "Frontend Developer",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "David Kim",
      title: "Backend Developer",
      image: "https://via.placeholder.com/250x250",
    },
    {
      name: "Sofia Lopez",
      title: "Full Stack Developer",
      image: "https://via.placeholder.com/250x250",
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
            <a href="#">View bio</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
