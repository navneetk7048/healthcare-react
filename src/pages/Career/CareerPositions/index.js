import { Link } from "react-router-dom";

import { ButtonSlide } from "../../../components/Button";
import positions from "../../../data/positions";

const CareerPositions = () => {
  return (
    <div className="career-positions container" id="career-positions">
      <h2>Current Positions</h2>
      <div className="career-positions-cards">
        {positions.map(({ id, title, description }) => (
          <div className="career-positions-card" key={id}>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <ButtonSlide
              type="white-tartOrange"
              as={Link}
              to="/career/career-detail">
              Apply Now
            </ButtonSlide>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPositions;
