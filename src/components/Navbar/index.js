import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./style.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex header">
      <div className="logo flex">
        <Link to="/">
          <img src={logo} alt="Health-Care" />
        </Link>
        <div className="toggle" onClick={() => setActive(!active)}>
          <FaBars />
        </div>
      </div>
      <div className={`flex navbar ${active}`}>
        <nav>
          <ul className="flex left-navlist ">
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
        </nav>
        <nav className="right-navlist">
          <ul className="right-up flex">
            <li className="separator">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="separator">|</li>
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
          <ul className="right-down">
            <li className="separator">
              <a href="tel:5612231234">
                <FaPhoneAlt /> (561) 223-1234
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
