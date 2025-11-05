import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../images/PRIMEX LOGO png.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // get current route
  const navigate = useNavigate();

  // Track scroll and active section (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      // Reset active section when not on homepage
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

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll smoothly
      navigate("/", { state: { scrollTo: id } });
      setIsMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Handle scroll on navigation from other pages
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Clear state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="PrimEx Logo" /></Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Us" },
            { id: "services", label: "Services" },
            { id: "partners", label: "Our Partners" },
            { id: "contact", label: "Contact Us" }
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

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </div>
      </div>
    </header>
  );
}

export default Header;


