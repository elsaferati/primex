import React, { useRef, useEffect, useState, useCallback } from "react";
import "../styles/Partners.css";

import partner1 from "../images/partner1.jpg";
import partner2 from "../images/partner2.jpg";
import partner3 from "../images/partner3.jpg";
import partner4 from "../images/partner4.jpg";
import partner5 from "../images/partner5.jpg";
import partner6 from "../images/partner6.jpg";
import partner7 from "../images/partner7.png";

function Partners() {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const AUTO_SPEED = 0.6; // pixels per frame

  // Auto-scroll function
  const autoScrollLoop = useCallback(() => {
    const c = containerRef.current;
    if (!c || pausedRef.current) return;

    const half = c.scrollWidth / 2;
    c.scrollLeft += AUTO_SPEED;

    if (c.scrollLeft >= half) c.scrollLeft -= half;
    rafRef.current = requestAnimationFrame(autoScrollLoop);
  }, []);

  const pauseAutoScrollTemporarily = useCallback(
    (ms = 2000) => {
      pausedRef.current = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        pausedRef.current = false;
        rafRef.current = requestAnimationFrame(autoScrollLoop);
      }, ms);
    },
    [autoScrollLoop]
  );

  // Manual buttons
  const scrollLeft = () => {
    const c = containerRef.current;
    if (!c) return;
    pauseAutoScrollTemporarily();
    c.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const c = containerRef.current;
    if (!c) return;
    pauseAutoScrollTemporarily();
    c.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Start auto-scroll when ready
  useEffect(() => {
    if (!isReady) return;
    const c = containerRef.current;
    if (!c) return;

    rafRef.current = requestAnimationFrame(autoScrollLoop);

    const onMouseEnter = () => pauseAutoScrollTemporarily(30000);
    const onMouseLeave = () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      pausedRef.current = false;
      rafRef.current = requestAnimationFrame(autoScrollLoop);
    };
    const onUserScroll = () => pauseAutoScrollTemporarily();

    c.addEventListener("mouseenter", onMouseEnter);
    c.addEventListener("mouseleave", onMouseLeave);
    c.addEventListener("wheel", onUserScroll, { passive: true });
    c.addEventListener("touchstart", onUserScroll, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      c.removeEventListener("mouseenter", onMouseEnter);
      c.removeEventListener("mouseleave", onMouseLeave);
      c.removeEventListener("wheel", onUserScroll);
      c.removeEventListener("touchstart", onUserScroll);
    };
  }, [isReady, autoScrollLoop, pauseAutoScrollTemporarily]);

  // Wait for all images to load before starting
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded >= partners.length) {
      setIsReady(true);
    }
  }, [imagesLoaded, partners.length]);

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-subtitle">We collaborate with industry leaders</p>

        <div className="partners-logos" ref={containerRef}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="partner-card">
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="partner-image"
                onLoad={handleImageLoad}
              />
            </div>
          ))}
        </div>

        <div className="partners-nav">
          <button className="nav-button" onClick={scrollLeft}>
            <span className="nav-icon">←</span>
          </button>
          <button className="nav-button" onClick={scrollRight}>
            <span className="nav-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Partners;















