import React from "react";

const SearchBox = ({ title, text, placeholder }) => {
  return (
    <div className="search-box">
      <div className="directions">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="input">
        <input type="text" placeholder={placeholder} />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
