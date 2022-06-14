import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaBars, FaUserCircle } from "react-icons/fa";
import logo from "../images/logo.png";
import Button from "./Button";

const Navbar = ({ setLoggedIn }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);
  const disable = () => setActive(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width > 1000) setActive(false);
  }, [width]);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" onClick={disable}>
          <img src={logo} alt="Health-Care" />
        </Link>
        <FaBars className={`toggle ${active}`} onClick={toggle} />
      </div>
      <nav className={`navlist ${active}`}>
        <ul>
          <li>
            <NavLink onClick={disable} to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/our-doctors">
              Our Doctors
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/find-a-doctor">
              Find A Doctor
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/locations">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink onClick={disable} to="/career">
              Career
            </NavLink>
          </li>
        </ul>
        <div>
          <div>
            <ul>
              <li className="big-screen-only">
                <Link to="/">
                  <FaHome />
                </Link>
              </li>
              <li className="big-screen-only">|</li>
              <li>
                <Link onClick={disable} to="/online-bill-pay">
                  Online Bill Pay
                </Link>
              </li>
              <li>
                <Link onClick={disable} to="/patient-info">
                  Patient Info
                </Link>
              </li>
              <li>
                <Link onClick={disable} to="/contact">
                  Contact
                </Link>
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
          <div className="logout">
            <Link to="/profile">
              <FaUserCircle /> {user.name.split(" ")[0]}
            </Link>
            <Button
              onClick={() => {
                localStorage.removeItem("currentUser");
                setLoggedIn(false);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
