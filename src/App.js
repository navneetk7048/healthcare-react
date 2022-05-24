import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services/";
import Footer from "./components/Footer";
import OurDoctors from "./pages/OurDoctors";
import FindADoctor from "./pages/FindADoctor";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-doctors" element={<OurDoctors />} />
        <Route path="/find-a-doctor" element={<FindADoctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
