import { Link } from "react-router-dom";

import { ButtonSlide } from "../../../components/Button";

const HomeLocation = () => (
  <div className="home-location container">
    <h2>Find a Healthcare Facilities</h2>
    <h1>Near You</h1>
    <ButtonSlide type="tiffanyBlue-tartOrange" as={Link} to="/locations">
      Healthcare Locations
    </ButtonSlide>
  </div>
);

export default HomeLocation;
