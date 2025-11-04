import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" data-name="footer" data-file="components/Footer.js">
      <div className="footer-container">
        {/* ---- Top Section ---- */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <h3 className="footer-logo">PrimEx</h3>
            <p>
              Prime Team, Prime Solution. Delivering excellence in IT and
              business solutions since 1985.
            </p>
          </div>

          {/* Pages Links */}
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#partners">Our Partners</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="footer-col">
            <h4>Working Hours</h4>
            <ul className="footer-hours">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="footer-col">
            <h4>Follow Us On</h4>
            <div className="footer-socials">
              <a href="#"><span>📘</span></a>
              <a href="#"><span>🐦</span></a>
              <a href="#"><span>💼</span></a>
            </div>
            <p>info@primex.com</p>
            <p>+1 (234) 567-8900</p>
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


