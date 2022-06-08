import { useState } from "react";
import { toast } from "react-toastify";
import { isAlphabet, isRequired } from "../validations";
import { ButtonSlide } from "./Button";

const SearchBox = ({ title, text, name, placeholder }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      isRequired(value, placeholder);
      isAlphabet(value, placeholder);

      toast.success("Success");
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
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
        <ButtonSlide variant="tartOrange-policeBlue">Search</ButtonSlide>
      </form>
    </div>
  );
};

export default SearchBox;
