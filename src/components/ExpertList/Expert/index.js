import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

const Expert = ({ doctor }) => {
  const navigate = useNavigate();

  const { name, speciality, picture, profile = "our-doctors" } = doctor;

  return (
    <div className="expert">
      <img src={picture} alt="" />
      <div className="slide">
        <div>
          <h2>{name}</h2>
          <p>{speciality}</p>
          <Button
            type="btn-darkblue-blue"
            text="View Profile"
            onClick={() => navigate(`/${profile}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Expert;
