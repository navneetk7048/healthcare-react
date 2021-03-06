import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { ButtonSlide } from "../components/Button";
import logo from "../images/logo.png";
import {
  isAlphabet,
  isEmailFormat,
  isRequired,
  isValidPassword,
} from "../validations";

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
      const existingUser = users.find((u) => u.email === registerData.email);

      if (existingUser) {
        toast.warning("User already exists with given email.");
      } else {
        setUsers([...users, registerData]);
        toast.success("Successfully registered!");

        setRegisterData({
          id: uuid(),
          name: "",
          email: "",
          password: "",
        });
      }
    }
  };

  return (
    <div className="register">
      <form
        className="register-form container"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <img src={logo} alt="" />
        <div className="separator" />
        <div className="register-input">
          <label>Name</label>
          <input
            name="name"
            value={registerData.name}
            onChange={handleChange}
            placeholder={"Enter Name"}
          />
        </div>
        <div className="register-input">
          <label>Email</label>
          <input
            name="email"
            value={registerData.email}
            onChange={handleChange}
            placeholder={"Enter Email"}
          />
        </div>
        <div className="register-input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder={"Enter Password"}
          />
        </div>
        <div className="register-buttons">
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
