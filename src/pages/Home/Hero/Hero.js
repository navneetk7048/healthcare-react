import React from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [img, setImg] = useState("hero1");

  return (
    <div className={`flex home ${img}`}>
      <div className="switch center">
        <FaAngleLeft
          onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}
        />
      </div>
      <div className="center">
        <div className="home-text">
          <h1>Getting You Back To Better.</h1>
          <p>
            Have saw replenish saw made bring creature whales darkness evening
          </p>
        </div>
      </div>
      <div className="switch center">
        <FaAngleRight
          onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}
        />
      </div>
    </div>
  );
};

export default Hero;
