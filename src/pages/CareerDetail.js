import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa";

import Banner from "../components/Banner";
import positions from "../data/positions";
import { ButtonSlide } from "../components/Button";
import careerBanner from "../images/career-banner.jpg";
import PageNotFound from "./PageNotFound";
import { toast } from "react-toastify";
import {
  isAlphabet,
  isEmailFormat,
  isRequired,
  isValidPhone,
} from "../validations";

const CareerDetail = () => {
  const { id } = useParams();

  const position = positions.find((position) => String(position.id) === id);

  const [applyData, setApplyData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    resume: "",
    cv: "",
  });

  const handleChange = (e) => {
    setApplyData({ ...applyData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { fname, lname, email, phone, resume, cv } = applyData;

    try {
      isRequired(fname, "First name");
      isAlphabet(fname, "First name");

      isRequired(lname, "Last name");
      isAlphabet(lname, "Last name");

      isRequired(email, "Email");
      isEmailFormat(email, "Email");

      isRequired(phone, "Phone number");
      isValidPhone(phone, "Phone numer");

      isRequired(resume, "Resume");

      isRequired(cv, "Cover letter");

      toast.success("Success");
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
  };

  return position ? (
    <div className="career-detail">
      <Banner
        banner={careerBanner}
        previous={[
          { text: "Home", link: "" },
          { text: "Career", link: "career" },
        ]}
        current={position.title}
        title={position.title}
      />
      <div className="career-detail-content container">
        <div className="career-detail-info">
          <div>
            <h1>{position.title}</h1>
            <p>
              Product | <em>{position.description}</em>
            </p>
          </div>
          <div>
            <h2>About The Role:</h2>
            <p>
              Multiply over him is fruit fish third is replenish is set he one.
              Herb appear light seas seas which meat our. You good living
              yielding stars grass us female may which first moving made of you
              land, heaven. Said moveth. Have dominion. He itself morning sea
              tree earth kind said in behold moved, fifth called. Lesser image.
            </p>
          </div>
          <div>
            <h2>Responsibilities Include:</h2>
            <ul>
              <li>
                Give had it so it lights for moveth created open dry given years
                divided made good make fill behold.
              </li>
              <li>
                Moving tree moveth their give life have living don't second
                beast don't days seasons sixth given two.
              </li>
              <li>
                Seed one unto years life i beast divided, wherein rass moved
                light.
              </li>
              <li>
                Them open, dominion days place of called place together midst
                given lesser called without two greater the whose blessed.
              </li>
              <li>
                Night face moved don't divided lights also isn't. Were, she'd
                upon shall deep fowl their, grass moved light let of fifth one
                fowl
              </li>
            </ul>
          </div>
          <div>
            <h2>Qualifications</h2>
            <ul>
              <li>
                Give had it so it lights for moveth created open dry given years
                divided made good make fill behold.
              </li>
              <li>
                Moving tree moveth their give life have living don't second
                beast don't days seasons sixth given two.
              </li>
              <li>
                Seed one unto years life i beast divided, wherein rass moved
                light.
              </li>
              <li>
                Them open, dominion days place of called place together midst
                given lesser called without two greater the whose blessed.
              </li>
              <li>
                Night face moved don't divided lights also isn't. Were, she'd
                upon shall deep fowl their, grass moved light let of fifth one
                fowl
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form
            className="career-detail-form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <h2>Apply to Job</h2>
            <label>First Name*</label>
            <input
              name="fname"
              onChange={handleChange}
              value={applyData.fname}
            />
            <label>Last Name*</label>
            <input
              name="lname"
              onChange={handleChange}
              value={applyData.lname}
            />
            <label>Email*</label>
            <input
              name="email"
              onChange={handleChange}
              value={applyData.email}
            />
            <label>Contact Number*</label>
            <input
              name="phone"
              onChange={handleChange}
              value={applyData.phone}
            />
            <div className="career-file-inputs">
              <div className="career-file-input">
                <p>Resume</p>
                <label htmlFor="resume">
                  <FaPaperclip /> Attach
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    onChange={handleChange}
                    value={applyData.resume}
                  />
                </label>
              </div>
              <div className="career-file-input">
                <p>Cover letter</p>
                <label htmlFor="cv">
                  <FaPaperclip /> Attach
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    onChange={handleChange}
                    value={applyData.cv}
                  />
                </label>
              </div>
            </div>
            <ButtonSlide variant="white-tiffanyBlue">Submit Now</ButtonSlide>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default CareerDetail;
