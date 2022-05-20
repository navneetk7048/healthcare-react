import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="container">
          <div>
            <h2>
              <Link to="/">
                <FaHeartbeat /> healthcare
              </Link>
            </h2>
            <p>
              Evening over without above be won't yielding days man, there.
              She'd man you female stars life darkness
            </p>
          </div>
          <div>
            <p>
              <FaMapMarkerAlt /> 27th Avenue, New York, W2 3XE, US
            </p>
            <p>
              <a href="tel: 5612231234">
                <FaPhoneAlt /> (561) 223-1234
              </a>
            </p>
            <p>
              <a href="mailto:contact@healthcare.com">
                <FaEnvelope /> contact@healthcare.com
              </a>
            </p>
          </div>
          <div>
            <p>
              <Link to="/">
                <FaFacebookF /> facebook
              </Link>
            </p>
            <p>
              <Link to="/">
                <FaTwitter /> twitter
              </Link>
            </p>
            <p>
              <Link to="/">
                <FaYoutube /> youtube
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="container">
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/our-doctors">Our Doctors</Link>
            <Link to="/find-a-doctor">Find A Doctor</Link>
            <Link to="/about">About</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/online-bill-pay">Online Bill Pay</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <p>&copy; All Rights Reserved | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
