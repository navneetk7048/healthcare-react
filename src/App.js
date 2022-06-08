import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollButton from "./components/ScrollButton";
import AppRoutes from "./AppRoutes";

const App = () => (
  <Router>
    <ScrollToTop>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ScrollButton />
    </ScrollToTop>
    <ToastContainer />
  </Router>
);

export default App;
