import { Link } from "react-router-dom";
import Expert from "./Expert";

const ExpertList = ({ heading, text, doctors }) => {
  return (
    <div className="expert-list container">
      <h1>{heading}</h1>
      <p>{text}</p>
      <div className="experts">
        {doctors.map((doctor) => (
          <Expert doctor={doctor} key={doctor.id} />
        ))}
      </div>
      <div>
        <Link to="/our-doctors" className="btn">
          Meet our all experts
        </Link>
      </div>
    </div>
  );
};

export default ExpertList;
