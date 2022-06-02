import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./hoc/ScrollToTop";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <AppRoutes />
        <Footer />
        <ScrollButton />
      </ScrollToTop>
    </Router>
  );
};

export default App;
