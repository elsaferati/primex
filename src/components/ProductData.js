import React, { useEffect, useRef } from "react";
import "../styles/ProductData.css";
import productImage from "../images/tables.png";

function ProductData() {
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          } else {
            entry.target.classList.remove("animate-up"); // remove class to repeat animation
          }
        });
      },
      { threshold: 0.2 }
    );

    const textElement = textRef.current;
    const imageElement = imageRef.current;

    if (textElement) observer.observe(textElement);
    if (imageElement) observer.observe(imageElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
      if (imageElement) observer.unobserve(imageElement);
    };
  }, []);

  return (
    <section className="product-data-section">
      <div className="product-data-container">
        <h1 className="section-title">Product Data Management</h1>

        <div className="product-data-grid">
          {/* Left: Text */}
          <div className="features-list" ref={textRef}>
            <h2 className="features-title">
              AI-Powered Product Data Automation
            </h2>
            <h3 className="highlight-text">No more manual data entry.</h3>

            <p className="description-text">
              With <strong>PrimEx</strong>, product attributes are filled in{" "}
              <strong>automatically</strong> from your general product data
              (Excel, ERP, or PIM). Instead of manually entering details, our
              system detects the value from your general information and pushes
              it to all required attributes.
            </p>

            <ul className="feature-points">
              <li>Saves time by eliminating repetitive manual entry.</li>
              <li>
                Ensures accuracy and consistency across all sales channels.
              </li>
              <li>Automatically adapts to each portal’s requirements.</li>
              <li>Faster product listing and compliance.</li>
            </ul>

            <div className="step-highlight">
              <span className="step-number">3</span>
              <span className="step-text">
                Complete in 3 Easy Steps to Finish
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="product-image-container" ref={imageRef}>
            <img
              src={productImage}
              alt="Smart Attribute Automation"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductData;
