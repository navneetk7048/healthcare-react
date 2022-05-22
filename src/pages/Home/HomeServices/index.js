import { Link } from "react-router-dom";
import {
  FaHandHoldingMedical,
  FaStethoscope,
  FaHeartbeat,
  FaTooth,
  FaBone,
  FaBrain,
} from "react-icons/fa";

const Services = () => {
  return (
    <div style={{ backgroundColor: "#00bcbd" }}>
      <div className="home-services container">
        <div className="home-services-text">
          <h1>Healthcare You Can Trust</h1>
          <p>
            Behold divided behold. In fly. Doesn't you'll heaven subdue creepeth
            air him divide give days image over called. Without him, night above
            subdue you'll let under multiply let firmament void that had don't
            called living it signs it, god. Gathered years multiply that that
            days signs void creepeth Together in face for he can't us. Seas air
            beast behold creature itself herb place, days.
          </p>
          <Link to="/services" className="btn">
            See All Services
          </Link>
        </div>
        <div className="home-services-icons">
          <div className="home-services-icon">
            <p>
              <FaHandHoldingMedical />
            </p>
            <p>Emergency Care</p>
          </div>
          <div className="home-services-icon">
            <p>
              <FaBrain />
            </p>
            <p>Neurology</p>
          </div>
          <div className="home-services-icon">
            <p>
              <FaStethoscope />
            </p>
            <p>Pediatry</p>
          </div>
          <div className="home-services-icon">
            <p>
              <FaHeartbeat />
            </p>
            <p>Cardiology</p>
          </div>
          <div className="home-services-icon">
            <p>
              <FaTooth />
            </p>
            <p>Dentistry</p>
          </div>
          <div className="home-services-icon">
            <p>
              <FaBone />
            </p>
            <p>Orthopedics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
