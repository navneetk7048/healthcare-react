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
import Testimonials from "./pages/Testimonials";
import BlogDetail from "./pages/BlogDetail";
import CareerDetail from "./pages/CareerDetail";
import PatientInfoDetail from "./pages/PatientInfoDetail";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = ({ isLoggedIn, setLoggedIn }) => (
  <Routes>
    {/* Navbar Pages */}
    <Route
      path="/"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Home />}
    />
    <Route
      path="/services"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Services />}
    />
    <Route
      path="/our-doctors"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <OurDoctors />
      }
    />
    <Route
      path="/find-a-doctor"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <FindADoctor />
      }
    />
    <Route
      path="/about"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <About />}
    />
    <Route
      path="/locations"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Locations />
      }
    />
    <Route
      path="/blog"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Blog />}
    />
    <Route
      path="/career"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Career />}
    />
    <Route
      path="/online-bill-pay"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <OnlineBillPay />
      }
    />
    <Route
      path="/patient-info"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <PatientInfo />
      }
    />
    <Route
      path="/contact"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Contact />}
    />

    {/* Other Pages */}
    <Route
      path="/services/:id"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <ServiceDetail />
      }
    />
    <Route
      path="/testimonials"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Testimonials />
      }
    />
    <Route
      path="/blog/:id"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <BlogDetail />
      }
    />
    <Route
      path="/career/:id"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <CareerDetail />
      }
    />
    <Route
      path="/our-doctors/:id"
      element={
        !isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <DoctorProfile />
      }
    />
    <Route
      path="/patient-info/:id"
      element={
        !isLoggedIn ? (
          <Login setLoggedIn={setLoggedIn} />
        ) : (
          <PatientInfoDetail />
        )
      }
    />

    {/* Registration */}
    <Route path="/register" element={<Register />} />

    {/* Error Page */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
