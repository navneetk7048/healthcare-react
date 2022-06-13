import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { ButtonSlide } from "../components/Button";

import {
  isAlphabet,
  isEmailFormat,
  isRequired,
  isValidPassword,
} from "../validations";

import logo from "../images/logo.png";
import { useEffect } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    id: uuid(),
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(
    () => localStorage.setItem("users", JSON.stringify(users)),
    [users]
  );

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    try {
      isRequired(registerData.name, "Name");
      isAlphabet(registerData.name, "Name");

      isRequired(registerData.email, "Email");
      isEmailFormat(registerData.email, "Email");

      isRequired(registerData.password, "Password");
      isValidPassword(registerData.password, "Password");

      return true;
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));

      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setUsers([...users, registerData]);
      toast.success("Successfully registered!");
    }
  };

  return (
    <div className="register">
      <form
        className="register-form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <img src={logo} alt="" />
        <label>Name</label>
        <input
          name="name"
          value={registerData.name}
          onChange={handleChange}
          placeholder={"Enter Name"}
        />
        <label>Email</label>
        <input
          name="email"
          value={registerData.email}
          onChange={handleChange}
          placeholder={"Enter Email"}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
          placeholder={"Enter Password"}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <ButtonSlide variant="tartOrange-policeBlue">Sign Up</ButtonSlide>
          <ButtonSlide variant="white-tartOrange" as={Link} to="/">
            Login
          </ButtonSlide>
        </div>
      </form>
    </div>
  );
};

export default Register;
