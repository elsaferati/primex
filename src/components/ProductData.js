import React from "react";
import "../styles/ProductData.css";
import productImage from "../images/tables.png";

function ProductData() {
  return (
    <section className="product-data-section">
      <div className="product-data-container">
        {/* Centered Section Title */}
        <h1 className="section-title">Product Data Management</h1>

        <div className="product-data-grid">
          {/* Left: Text */}
          <div className="features-list">
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
          <div className="product-image-container">
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
