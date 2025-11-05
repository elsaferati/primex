// src/components/HomePage.js
import React from "react";
import Hero from "./Hero";
import About from "./About";
import ProductData from "./ProductData";
import Services from "./Services";
import Partners from "./Partners";
import CTASections from "./CTASections";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProductData />
      <Services />
      <Partners />
      <CTASections />
      <Contact />
    </div>
  );
};

export default HomePage;
