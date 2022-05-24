import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ doctor }) => {
  const { name, speciality, picture } = doctor;

  return (
    <div className="expert">
      <img src={picture} alt="" />
      <div className="slide">
        <div>
          <h2>{name}</h2>
          <p>{speciality}</p>
          <Link to="/" className="btn">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
