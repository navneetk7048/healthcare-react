import React from "react";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import hero1 from "../../../assets/images/hero-img1.jpg";
import hero2 from "../../../assets/images/hero-img2.jpg";

const Hero = () => {
  const images = [hero1, hero2];

  const [img, setImg] = useState(0);

  const nextImg = () => {
    if (img + 1 >= images.length) setImg(0);
    else setImg(img + 1);
  };

  const prevImg = () => {
    if (img - 1 < 0) setImg(images.length - 1);
    else setImg(img - 1);
  };

  // setInterval(nextImg, 5000);

  return (
    <div className={`hero`}>
      <img src={images[img]} alt="hero img" />
      <div className="hero-content">
        <div className="switch" onClick={prevImg}>
          <MdNavigateBefore />
        </div>
        <div className="hero-text">
          <div>
            <h1>Getting You Back To Better.</h1>
            <p>
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
        </div>
        <div className="switch" onClick={nextImg}>
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Hero;
