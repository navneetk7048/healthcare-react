import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./hoc/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <AppRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
