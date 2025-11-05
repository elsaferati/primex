import React from "react";
import Certificate from "../images/zertifikat.png";
import "../styles/CertificatePage.css";

function CertificatePage() {
  return (
    <div className="certificate-page">
      <h1 className="certificate-title">DSGVO Certificate</h1>
      <img
        src={Certificate}
        alt="DSGVO Certificate"
        className="certificate-image"
      />
    </div>
  );
}

export default CertificatePage;
