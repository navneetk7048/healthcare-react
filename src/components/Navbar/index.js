import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Health-Care" />
        </Link>
        <FaBars className={`toggle ${active}`} onClick={toggle} />
      </div>
      <nav className={`navlist ${active}`}>
        <ul>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/our-doctors">Our Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/find-a-doctor">Find A Doctor</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
        <div>
          <ul>
            <li className="big-screen-only">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="big-screen-only">|</li>
            <li>
              <Link to="/online-bill-pay">Online Bill Pay</Link>
            </li>
            <li>
              <Link to="/patient-info">Patient Info</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="phone">
            <li className="big-screen-only">
              <a href="tel:5612231234">
                <FaPhoneAlt /> (561) 223-1234
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
