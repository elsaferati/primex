import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Terms from "./components/Terms";
import ScrollToTop from "./helpers/ScrollToTop";
import Cerificates from "./components/Certificates";
import ApplyPage from "./pages/ApplyForm";
import BusinessForm from "./pages/BusinessForm";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/certificates" element={<Cerificates />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/business-apply" element={<BusinessForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
