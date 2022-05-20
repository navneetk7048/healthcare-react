import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/our-doctors" element={<Home />} />
        <Route path="/find-a-doctor" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/locations" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/career" element={<Home />} />
        <Route path="/online-bill-pay" element={<Home />} />
        <Route path="/patient-info" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
