import React from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div id="contact" className="contact-section" data-name="contact">
        <div className="contact-container">
          <h2 className="contact-title">Reach Out to Us</h2>

          <div className="contact-links">
            <a href="mailto:info@primex.eu" className="contact-button">
              <div className="icon-mail"></div>
              <div className="contact-text">
                <small>Mail Us</small>
                <span>info@primex.eu</span>
              </div>
            </a>

            <a href="tel:+38349937863" className="contact-button">
              <div className="icon-phone"></div>
              <div className="contact-text">
                <small>Make a Call</small>
                <span>+383 49 937 863</span>
              </div>
            </a>
          </div>

          <div className="contact-address">
            <h3 className="address-title">Visit Us</h3>
            <p>Zone: Zona Industriale Fushe Kosove</p>
            <p>Street: 7 Shtatori</p>
            <p>Nr: 12</p>
            <p>City: Fushe Kosove</p>
            <p>Country: Republic of Kosovo</p>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="form-title">Contact Us</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>

              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                placeholder="Enter your message"
              ></textarea>

              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Primex Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.3783983218763!2d21.0816662!3d42.6336419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135363a149e1659d%3A0xccf789d8883ae1d!2sPRIMEX%20SHPK!5e0!3m2!1sen!2s!4v1709380320000!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
