import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../images/PRIMEX LOGO png.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="PrimEx Logo" />
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Us" },
            { id: "services", label: "Services" },
            { id: "partners", label: "Our Partners" },
            { id: "contact", label: "Contact Us" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
}

export default Header;
