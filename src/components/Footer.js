import React from "react";
import "../styles/Footer.css";
import PrimexLogo from "../images/PRIMEX LOGO png.png";
import FacebookIcon from "../images/facebook.png";
import InstagramIcon from "../images/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src={PrimexLogo} alt="PrimEx Logo" />
            <p>Prime Team, Prime Solution. Delivering excellence in IT and business solutions since 1985.</p>
          </div>

          <div className="footer-col footer-col-pages">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#partners">Our Partners</Link></li>
              <li><Link to="/#contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Working Hours</h4>
            <ul className="footer-hours">
              <li>Monday - Friday:</li>
              <li>8:00 AM - 16:30 PM</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us On</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com/primexeu" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/primex.eu/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
            </div>
            <h4>Contact Us</h4>
            <p>E-mail: info@primexeu.com</p>
            <p>Phone: +383 49 937 863</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PrimEx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


