import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Expert from "./Expert";

const ExpertList = ({ heading, text, doctors }) => {
  const navigate = useNavigate();

  return (
    <div className="expert-list container">
      <h1>{heading}</h1>
      <p>{text}</p>
      <div className="experts">
        {doctors.map((doctor) => (
          <Expert doctor={doctor} key={doctor.id} />
        ))}
      </div>
      <Button type="btn-blue-pink" onClick={() => navigate("/our-doctors/")}>
        Meet Our All Experts
      </Button>
    </div>
  );
};

export default ExpertList;
