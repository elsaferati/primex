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
    <div className="App font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="pt-16"> 
        {/* Add top padding to offset fixed header */}
        <Hero />
        <About />
        <Services />
        <ProductData />
        <Partners />
        <CTASections />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


