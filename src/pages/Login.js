import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { ButtonSlide } from "../components/Button";

import { isEmailFormat, isRequired } from "../validations";

import logo from "../images/logo.png";

const Login = ({ setLoggedIn }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    try {
      isRequired(loginData.email, "Email");
      isEmailFormat(loginData.email, "Email");

      isRequired(loginData.password, "Password");

      return true;
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));

      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newUser = users.find(
        (u) => u.email === loginData.email && u.password === loginData.password
      );

      if (newUser) {
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        setLoggedIn(true);
      } else {
        toast.warning("Invalid email or password");
      }
    }
  };

  return (
    <div className="login ">
      <form
        className="login-form container"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <img src={logo} alt="" />
        <div className="separator" />
        <div className="login-input">
          <label>Email</label>
          <input
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder={"Enter Email"}
          />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder={"Enter Password"}
          />
        </div>
        <div className="login-buttons">
          <ButtonSlide variant="tartOrange-policeBlue">Login</ButtonSlide>
          <ButtonSlide variant="white-tartOrange" as={Link} to="/register">
            Sign Up
          </ButtonSlide>
        </div>
      </form>
    </div>
  );
};

export default Login;
