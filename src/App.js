import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("currentUser") ? true : false
  );

  return (
    <Router>
      <ScrollToTop>
        {isLoggedIn ? <Navbar setLoggedIn={setLoggedIn} /> : null}
        <AppRoutes isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        {isLoggedIn ? <Footer /> : null}
        <ScrollButton />
      </ScrollToTop>
      <ToastContainer />
    </Router>
  );
};

export default App;
