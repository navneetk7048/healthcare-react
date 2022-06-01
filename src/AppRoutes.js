import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
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
import DoctorProfile from "./pages/DoctorProfile";
import doctors from "./data/doctors";
import Testimonials from "./pages/Testimonials";
import BlogDetail from "./pages/BlogDetail";

const AppRoutes = () => (
  <Routes>
    {/* Home Page */}
    <Route path="/" element={<Home />} />

    {/* Navbar Pages */}
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

    {/* Other Pages */}
    <Route path="/service-detail" element={<ServiceDetail />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/blog-detail" element={<BlogDetail />} />
    {doctors.map((doctor) => (
      <Route
        path={`/${doctor.username}`}
        element={<DoctorProfile doctorDetails={doctor} />}
      />
    ))}
  </Routes>
);

export default AppRoutes;