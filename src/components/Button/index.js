import React from "react";

const Button = ({ category, text }) => {
  return <button className={"btn " + { category }}>{text}</button>;
};

export default Button;
