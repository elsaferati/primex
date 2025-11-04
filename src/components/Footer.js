import React from "react";
import "../styles/Footer.css";
import PrimexLogo from "../images/PRIMEX LOGO png.png";
import FacebookIcon from "../images/facebook.png";
import InstagramIcon from "../images/instagram.png";

function Footer() {
  return (
    <footer
      className="footer"
      data-name="footer"
      data-file="components/Footer.js"
    >
      <div className="footer-container">
        {/* ---- Top Section ---- */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <img src={PrimexLogo} alt="PrimEx Logo" />
            <p>
              Prime Team, Prime Solution. Delivering excellence in IT and
              business solutions since 1985.
            </p>
          </div>

          {/* Pages Links */}
          <div className="footer-col footer-col-pages">
            <h4>Pages</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#partners">Our Partners</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="footer-col">
            <h4>Working Hours</h4>
            <ul className="footer-hours">
              <li>Monday - Friday: </li>
              <li>8:00 AM - 16:30 PM</li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="footer-col">
            <h4>Follow Us On</h4>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/primexeu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/primex.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </div>

            <h4>Contact Us</h4>
            <p>E-mail: info@primexeu.com</p>
            <p>Phone: +383 49 937 863</p>

          </div>
        </div>

        {/* ---- Bottom Copyright ---- */}
        <div className="footer-bottom">
          <p>&copy; 2025 PrimEx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
