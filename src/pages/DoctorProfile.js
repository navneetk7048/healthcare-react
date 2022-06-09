// Packages
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaQuoteLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

// Components
import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import PageNotFound from "./PageNotFound";

// Data
import doctors from "../data/doctors";

// Functions
import { scrollToTop } from "../Functions";
import {
  isAlphabet,
  isEmailFormat,
  isRequired,
  isValidPhone,
} from "../validations";

// Images
import drBanner from "../images/dr-banner.jpg";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { id } = useParams();

  const doctor = doctors.find((doctor) => String(doctor.id) === id);

  const [contactData, setContactData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    description: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    const { fname, lname, email, contact, description } = contactData;

    try {
      isRequired(fname, "First Name");
      isAlphabet(fname, "First Name");

      isRequired(lname, "Last Name");
      isAlphabet(lname, "Last Name");

      isRequired(email, "Email");
      isEmailFormat(email, "Email");

      isRequired(contact, "Contact number");
      isValidPhone(contact, "Contact number");

      isRequired(description, "Case Description");

      toast.success("Success");
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
  };

  return doctor ? (
    <div className="doctor-profile">
      <Banner
        banner={drBanner}
        previous={[
          { text: "Home", link: "" },
          { text: "Our Doctors", link: "our-doctors" },
        ]}
        current={doctor.name}
        title={doctor.name}
      />
      <div className="container">
        <div className="doctor-profile-top">
          <div className="doctor-profile-info">
            <div className="doctor-profile-info-picture">
              <img src={doctor.picture} alt="" />
            </div>
            <div className="doctor-profile-info-text">
              <div>
                <h2>{doctor.name}</h2>
                <p>{doctor.speciality}</p>
              </div>
              <div className="separator" />
              <div>
                <p>
                  <FaPhoneAlt /> <a href="tel:5612231325"> (561) 223-1325</a>
                </p>
                <p>
                  <FaEnvelope />
                  <a href="mailto:info@healthcare.com"> info@healthcare.com</a>
                </p>
              </div>
              <div>
                <p className="social-media-icons">
                  <FaFacebookF onClick={scrollToTop} />
                  <FaTwitter onClick={scrollToTop} />
                  <FaInstagram onClick={scrollToTop} />
                </p>
              </div>
              <div className="separator" />
              <div>
                <FaQuoteLeft /> You're day midst of brought. Winged together
                which forth itself in you air dominion good darkness seed upon
                be made upon i moved.
              </div>
            </div>
          </div>
          <div>
            <h3>Biography</h3>
            <p>
              Bearing called a fruit greater created hath fourth two. Also.
              Light day greater wherein made. Days, stars fruit she'd after male
              fowl lesser divided. Firmament one whales called of, firmament god
              you're waters years upon abundantly brought image, void above he,
              saw. Doesn't rule, god, unto greater and fish, spirit forth There.
              Deep face upon greater you, seasons one. Day spirit so dry he
              called.
            </p>
          </div>
          <div className="doctor-profile-education">
            <h3>Education</h3>
            <div className="doctor-profile-education-item">
              <p>
                Abc University of Los Angeles <span>(2006-2008)</span>
              </p>
              <p>
                Sigh view am high neat half to what. Sent late held than set why
                wife our. If an blessing building steepest. Agreement distrusts
                mrs six affection satisfied.
              </p>
            </div>
            <div className="doctor-profile-education-item">
              <p>
                Abc University of Los Angeles <span>(2004-2005)</span>
              </p>
              <p>
                Sigh view am high neat half to what. Sent late held than set why
                wife our. If an blessing building steepest. Agreement distrusts
                mrs six affection satisfied.
              </p>
            </div>
          </div>
          <div className="doctor-profile-form">
            <h2>Contact Me</h2>
            <form
              className="doctor-profile-form-inputs"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <input
                name="fname"
                placeholder="First Name"
                onChange={handleChange}
                value={contactData.fname}
              />
              <input
                name="lname"
                placeholder="Last Name"
                onChange={handleChange}
                value={contactData.lname}
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={contactData.email}
              />
              <input
                name="contact"
                placeholder="Contact"
                onChange={handleChange}
                value={contactData.contact}
              />
              <textarea
                name="description"
                placeholder="Case Description"
                onChange={handleChange}
                value={contactData.description}
              />
              <ButtonSlide variant="tartOrange-policeBlue">
                Submit Now
              </ButtonSlide>
            </form>
          </div>
        </div>
        <div className="doctor-profile-links">
          <h2>Our Experts</h2>
          {doctors.map(({ id, name, speciality }) => (
            <Link
              key={id}
              className="doctor-profile-links-item"
              to={`/our-doctors/${id}`}
            >
              <FaAngleDoubleRight />
              <div>
                <p className="doctor-profile-links-item-name">{name}</p>
                <p className="doctor-profile-links-item-speciality">
                  {speciality}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default DoctorProfile;
