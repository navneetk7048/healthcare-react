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
import OnlineBillPay from "./pages/OnlineBillPay";
import PatientInfo from "./pages/PatientInfo";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";

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
        <Route path="/online-bill-pay" element={<OnlineBillPay />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
