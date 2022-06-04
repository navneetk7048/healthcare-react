import { Link } from "react-router-dom";

import { ButtonSlide } from "./Button";

const ExpertList = ({ heading, doctors }) => {
  return (
    <div className="expert-list container">
      <h1>{heading}</h1>
      <p>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <div className="experts">
        {doctors.map(({ id, picture, name, speciality, username }) => (
          <div className="expert" key={id}>
            <img src={picture} alt="" />
            <div className="slide">
              <div>
                <h2>{name}</h2>
                <p>{speciality}</p>
                <ButtonSlide
                  type="policeBlue-tiffanyBlue"
                  as={Link}
                  to={`/our-doctors/${username}`}>
                  View Profile
                </ButtonSlide>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonSlide type="tiffanyBlue-tartOrange" as={Link} to="/our-doctors">
        Meet Our All Experts
      </ButtonSlide>
    </div>
  );
};

export default ExpertList;
