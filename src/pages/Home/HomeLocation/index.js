import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";

const HomeLocation = () => {
  const navigate = useNavigate();

  return (
    <div className="home-location container">
      <h2>Find a Healthcare Facilities</h2>
      <h1>Near You</h1>
      <Button
        type="btn-blue-pink"
        text="Healthcare Locations"
        onClick={() => navigate("/locations")}
      />
    </div>
  );
};

export default HomeLocation;
