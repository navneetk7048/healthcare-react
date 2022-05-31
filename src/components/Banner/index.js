import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ banner, previous, current, title }) => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="banner-content">
        <p>
          {previous.map((prev) => (
            <>
              <Link to={`/${prev.link}`}>{prev.text}</Link> /{" "}
            </>
          ))}
          <span>{current}</span>
        </p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
