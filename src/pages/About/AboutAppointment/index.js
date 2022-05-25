import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";

const AboutAppointment = () => {
  const navigate = useNavigate();

  return (
    <div className="about-appointment">
      <div className="container">
        <h1>High-class specialists are ready to help you at any time.</h1>
        <p>
          Contact us any suitable way and make an appointment with the doctor
          whose help you need! Visit us at the scheduled time and get your
          treatment.
        </p>
        <Button
          type="btn-pink-darkblue"
          text="Book An Appointment"
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

export default AboutAppointment;
