// Packages
import { useState } from "react";
import { Link } from "react-router-dom";
// Components
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AppointmentForm from "../components/AppointmentForm";
import Experts from "../components/Home/Experts";
import Introduction from "../components/Home/Introduction";
import Services from "../components/Home/Services";
import Video from "../components/Home/Video";
import Footer from "../components/Footer";
// Images
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
// CSS
import "./Home.css";

const Home = () => {
  const [img, setImg] = useState("hero1");

  // setInterval(() => setImg(img === "hero1" ? "hero2" : "hero1"), 5000);

  return (
    <>
      <div className={`flex home ${img}`}>
        <div className="center">
          <div
            className="switch"
            onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
            <FaAngleLeft />
          </div>
        </div>
        <div className="center">
          <div className="home-text">
            <h1>Getting You Back To Better.</h1>
            <p>
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
        </div>
        <div className="center">
          <div
            className="switch"
            onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
            <FaAngleRight />
          </div>
        </div>
      </div>
      <AppointmentForm />
      <Introduction />
      <Services />
      <Experts />
      <Video />
      <div className="location-bg container">
        <h2>Find a Healthcare Facilities</h2>
        <h1>Near You</h1>
        <div style={{ textAlign: "center" }}>
          <Link to="/locations" className="btn btn-blue">
            Healthcare Locations
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="home-blog">
          <h1>A healthcare Blog</h1>
          <p>
            Together own seas said fowl third herb saw also that had saying
            darkness may After together
          </p>
          <div className="blogs">
            <div className="blog">
              <img src={blog1} alt="blog-1" />
              <p>
                <Link to="/">From Fowl Moving Night Our Wherein Herb Seed</Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
            <div className="blog">
              <img src={blog2} alt="blog-2" />
              <p>
                <Link to="/">Morning Forth There Him Great Darker Lights</Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
            <div className="blog">
              <img src={blog3} alt="blog-3" />
              <p>
                <Link to="/">
                  Above Darkness Lights Day Blessed Third For Image
                </Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/blog" className="btn btn-blue">
              see all healthcare blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
