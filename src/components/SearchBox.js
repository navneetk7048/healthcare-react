import { useState } from "react";
import { isValidName } from "../Functions";
import { ButtonSlide } from "./Button";

const SearchBox = ({ title, text, name, placeholder }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      isValidName(value, placeholder);
    } catch (error) {
      alert(error);
    }

    console.log("hello");
  };

  return (
    <div className="search-box">
      <div className="directions">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <form
        className="input"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ButtonSlide type="tartOrange-policeBlue">Search</ButtonSlide>
      </form>
    </div>
  );
};

export default SearchBox;
