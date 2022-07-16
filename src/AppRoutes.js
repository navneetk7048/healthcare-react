import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";
import DoctorProfile from "./pages/DoctorProfile";
import FindADoctor from "./pages/FindADoctor";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import OnlineBillPay from "./pages/OnlineBillPay";
import OurDoctors from "./pages/OurDoctors";
import PageNotFound from "./pages/PageNotFound";
import PatientInfo from "./pages/PatientInfo";
import PatientInfoDetail from "./pages/PatientInfoDetail";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

const AppRoutes = ({ isLoggedIn, setLoggedIn }) => (
  <Routes>
    {/* Navbar Pages */}
    <Route
      path="/"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Home />}
    />
    <Route
      path="/services"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Services />}
    />
    <Route
      path="/our-doctors"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <OurDoctors />}
    />
    <Route
      path="/find-a-doctor"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <FindADoctor />}
    />
    <Route
      path="/about"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <About />}
    />
    <Route
      path="/locations"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Locations />}
    />
    <Route
      path="/blog"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Blog />}
    />
    <Route
      path="/career"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Career />}
    />
    <Route
      path="/online-bill-pay"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <OnlineBillPay />}
    />
    <Route
      path="/patient-info"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <PatientInfo />}
    />
    <Route
      path="/contact"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Contact />}
    />

    {/* Other Pages */}
    <Route
      path="/services/:id"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <ServiceDetail />}
    />
    <Route
      path="/testimonials"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <Testimonials />}
    />
    <Route
      path="/blog/:id"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <BlogDetail />}
    />
    <Route
      path="/career/:id"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <CareerDetail />}
    />
    <Route
      path="/our-doctors/:id"
      element={!isLoggedIn ? <Navigate to="/" replace /> : <DoctorProfile />}
    />
    <Route
      path="/patient-info/:id"
      element={
        !isLoggedIn ? <Navigate to="/" replace /> : <PatientInfoDetail />
      }
    />
    <Route
      path="/profile"
      element={!isLoggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Profile />}
    />

    {/* Registration */}
    <Route path="/register" element={<Register />} />

    {/* Error Page */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
