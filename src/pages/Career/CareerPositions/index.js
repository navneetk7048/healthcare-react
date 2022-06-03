import { useNavigate } from "react-router-dom";

import positions from "../../../data/positions";
import Button from "../../../components/Button";

const CareerPositions = () => {
  const navigate = useNavigate();

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
            <Button
              type="btn-special-pink"
              onClick={() => navigate("/career/career-detail")}>
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPositions;
