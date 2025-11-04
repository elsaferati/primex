import React from "react";
import "../styles/ProductData.css"; // Import the CSS file

function ProductData() {
  const features = [
    "Automated data classification",
    "Real-time synchronization",
    "Advanced analytics and reporting",
    "Seamless integration with existing systems",
    "Scalable cloud infrastructure",
  ];

  return (
    <section className="product-data-section">
      <div className="product-data-container">
        <h2 className="product-data-title">Product Data Management</h2>

        <div className="product-data-grid">
          {/* Features List */}
          <div className="features-list">
            <h3 className="features-title">Smart Attribute Automation</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✔️</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Image */}
          <div className="product-image-container">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
              alt="Product Management"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductData;

