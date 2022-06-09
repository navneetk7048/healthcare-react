// Packages
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

// Components
import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import Note from "../components/Note";

// Data
import doctors from "../data/doctors";

// Functions
import { isAlphabet, isRequired } from "../validations";

// Images
import about from "../images/about-banner.jpg";

const FindADoctor = () => {
  const [name, setName] = useState("");
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleNameSubmit = (e) => {
    e.preventDefault();

    try {
      isRequired(name, "Name");
      isAlphabet(name, "Name");

      if (nameResult.length) {
        navigate(`/our-doctors/${nameResult[0].id}`);
      } else {
        throw new Error("No result found");
      }
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();

    try {
      isRequired(keyword, "Keyword");
      isAlphabet(keyword, "Keyword");

      if (keywordResult.length) {
        navigate(`/our-doctors/${keywordResult[0].id}`);
      } else {
        throw new Error("No result found");
      }
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const nameResult = doctors.filter((doctor) =>
    doctor.name.match(RegExp(name, "i"))
  );

  const keywordResult = doctors.filter((doctor) =>
    doctor.speciality.match(RegExp(keyword, "i"))
  );

  return (
    <div className="find-a-doctor">
      <Banner
        banner={about}
        previous={[{ text: "Home", link: "" }]}
        current="Find Your Doctor"
        title="Physician Directory"
      />
      <div className="container">
        <Note>To find your doctor, please use the search options below:</Note>
        <div className="search-box">
          <div className="directions">
            <h2>Search by Doctor Name</h2>
            <p>Enter the first letters of a doctor's last name.</p>
          </div>
          <form
            className="input"
            onSubmit={handleNameSubmit}
            noValidate
            autoComplete="off"
          >
            <div className="search-result">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {name ? (
                nameResult ? (
                  <div className="search-result-items">
                    {nameResult.map((result) => (
                      <Link to={`/our-doctors/${result.id}`}>
                        {result.name}
                      </Link>
                    ))}
                  </div>
                ) : null
              ) : null}
            </div>
            <ButtonSlide variant="tartOrange-policeBlue">Search</ButtonSlide>
          </form>
        </div>
        <div className="search-box">
          <div className="directions">
            <h2>Search by Condition or Specialty</h2>
            <p>
              Type a keyword, specialty or condition to find the right
              specialist.
            </p>
          </div>
          <form
            className="input"
            onSubmit={handleKeywordSubmit}
            noValidate
            autoComplete="off"
          >
            <div className="search-result">
              <input
                type="text"
                placeholder="Keyword"
                name="keyword"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
              {keyword ? (
                keywordResult ? (
                  <div className="search-result-items">
                    {keywordResult.map((result) => (
                      <Link to={`/our-doctors/${result.id}`}>
                        {result.name} - {result.speciality}
                      </Link>
                    ))}
                  </div>
                ) : null
              ) : null}
            </div>
            <ButtonSlide variant="tartOrange-policeBlue">Search</ButtonSlide>
          </form>
        </div>
        <ButtonSlide
          variant="tiffanyBlue-tartOrange"
          as={Link}
          to="/our-doctors"
        >
          Meet Our All Experts
        </ButtonSlide>
      </div>
    </div>
  );
};

export default FindADoctor;
