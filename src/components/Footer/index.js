import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerLogo from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-first">
            <h2>
              <Link to="/">
                <img src={footerLogo} alt="" />
              </Link>
            </h2>
            <p>
              Evening over without above be won't yielding days man, there.
              She'd man you female stars life darkness
            </p>
          </div>
          <div className="footer-top-second">
            <p>
              <a href="https://goo.gl/maps/MV615MttEfEqYJsNA">
                <FaMapMarkerAlt /> 27th Avenue, New York, W2 3XE, US
              </a>
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
      <div className="footer-bottom">
        <div className="container">
          <ul className="footer-links">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/our-doctors">Our Doctors</Link>
            </li>
            <li>
              <Link to="/find-a-doctor">Find A Doctor</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/online-bill-pay">Online Bill Pay</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <p>&copy; All Rights Reserved | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
