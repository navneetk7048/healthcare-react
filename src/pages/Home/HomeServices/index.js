import { useNavigate } from "react-router-dom";
import {
  FaHandHoldingMedical,
  FaStethoscope,
  FaHeartbeat,
  FaTooth,
  FaBone,
  FaBrain,
} from "react-icons/fa";

import Button from "../../../components/Button";

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
          <Button
            type="btn-pink-darkblue"
            text="See All Services"
            onClick={() => navigate("/services")}
          />
        </div>
        <div className="icons">
          <div className="icon">
            <FaHandHoldingMedical />
            <p>Emergency Care</p>
          </div>
          <div className="icon">
            <FaBrain />
            <p>Neurology</p>
          </div>
          <div className="icon">
            <FaStethoscope />
            <p>Pediatry</p>
          </div>
          <div className="icon">
            <FaHeartbeat />
            <p>Cardiology</p>
          </div>
          <div className="icon">
            <FaTooth />
            <p>Dentistry</p>
          </div>
          <div className="icon">
            <FaBone />
            <p>Orthopedics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
