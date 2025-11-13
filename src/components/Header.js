import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../images/PRIMEX LOGO png.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

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
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const scrollId = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setIsMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Navigation with dropdown
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="PrimEx Logo" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <button
            onClick={() => scrollToSection("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </button>

          {/* About Us with dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => {
              // delay hiding slightly to allow moving the mouse down smoothly
              setTimeout(() => setShowAboutDropdown(false), 200);
            }}
          >
            <button
              className={`dropdown-btn ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About Us ▾
            </button>

            {showAboutDropdown && (
              <div className="dropdown-menu">
                <Link
                  to="/our-work"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowAboutDropdown(false);
                  }}
                >
                  Our Work
                </Link>
                <Link
                  to="/our-people"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowAboutDropdown(false);
                  }}
                >
                  Our People
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("services")}
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("partners")}
            className={activeSection === "partners" ? "active" : ""}
          >
            Our Partners
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact Us
          </button>
        </nav>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
}

export default Header;
