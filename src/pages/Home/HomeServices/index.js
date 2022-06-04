import { Link, useNavigate } from "react-router-dom";
import {
  FaHandHoldingMedical,
  FaStethoscope,
  FaHeartbeat,
  FaTooth,
  FaBone,
  FaBrain,
} from "react-icons/fa";

import { ButtonSlide } from "../../../components/Button";

const HomeServices = () => {
  const navigate = useNavigate();

  return (
    <div className="home-services">
      <div className="container">
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
          <ButtonSlide type="tartOrange-policeBlue" as={Link} to="/services">
            See All Services
          </ButtonSlide>
        </div>
        <div className="icons">
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaHandHoldingMedical />
            <p>Emergency Care</p>
          </div>
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaBrain />
            <p>Neurology</p>
          </div>
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaStethoscope />
            <p>Pediatry</p>
          </div>
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaHeartbeat />
            <p>Cardiology</p>
          </div>
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaTooth />
            <p>Dentistry</p>
          </div>
          <div
            className="icon"
            onClick={() => navigate("/services/service-detail")}>
            <FaBone />
            <p>Orthopedics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
