import React from "react";
import "../styles/ContactMap.css";

function ContactMap() {
  return (
    <div className="contact-map-container">
      <iframe
        title="Primex Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.3783983218763!2d21.0816662!3d42.6336419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135363a149e1659d%3A0xccf789d8883ae1d!2sPRIMEX%20SHPK!5e0!3m2!1sen!2s!4v1709380320000!5m2!1sen!2s"
        style={{
          width: "100%",
          height: "450px",
          border: "none",
          borderRadius: "16px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactMap;
