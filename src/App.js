import { BrowserRouter as Router } from "react-router-dom";

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
  </Router>
);

export default App;
