// src/components/Terms.js
import React, { useEffect, useState } from "react";
import "../styles/Terms.css";

const Terms = () => {
  const [termsText, setTermsText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/terms.txt") // ✅ must start with /
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load terms file");
        }
        return response.text();
      })
      .then((data) => {
        setTermsText(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Terms and Conditions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="terms" className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <pre className="terms-text">{termsText}</pre>
    </div>
  );
};

export default Terms;



