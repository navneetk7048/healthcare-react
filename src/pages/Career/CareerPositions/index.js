import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";

const CareerPositions = () => {
  const navigate = useNavigate();

  return (
    <div className="career-positions container">
      <h2>Current Positions</h2>
      <div className="career-positions-cards">
        <div className="career-positions-card">
          <div>
            <h3>Technical Ambassador</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Account Excutive</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Infection Control Officer</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Research Associate</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>AR Analyst</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>HCC Medical Coding</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Head - Human Resource</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Medical Transcriptionist</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Medical Representative</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="career-positions-card">
          <div>
            <h3>Orthopaedic Surgeon</h3>
            <p>Full Time - San Francisco</p>
          </div>
          <Button
            text="Apply Now"
            type="btn-special-pink"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPositions;
