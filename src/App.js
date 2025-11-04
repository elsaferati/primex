import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProductData from "./components/ProductData";
import Partners from "./components/Partners";
import CTASections from "./components/CTASections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        {/* Shared container for consistent horizontal padding */}
        <div className="container">
          <Hero />
          <About />
          <ProductData />
          <Services />
          <Partners />
          <CTASections />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
