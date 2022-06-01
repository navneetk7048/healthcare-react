import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaQuoteLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import doctors from "../../data/doctors";
import drBanner from "../../assets/images/dr-banner.jpg";

const DoctorProfile = ({ doctorDetails }) => {
  const { picture, name, speciality } = doctorDetails;

  const navigate = useNavigate();

  return (
    <div className="doctor-profile">
      <Banner
        banner={drBanner}
        previous={[
          { text: "Home", link: "" },
          { text: "Our Doctors", link: "our-doctors" },
        ]}
        current={name}
        title={name}
      />
      <div className="container">
        <div className="doctor-profile-top">
          <div className="doctor-profile-info">
            <div className="doctor-profile-info-picture">
              <img src={picture} alt="" />
            </div>
            <div className="doctor-profile-info-text">
              <div>
                <h2>{name}</h2>
                <p>{speciality}</p>
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
                  <FaFacebookF onClick={() => window.scroll(0, 0)} />
                  <FaTwitter onClick={() => window.scroll(0, 0)} />
                  <FaInstagram onClick={() => window.scroll(0, 0)} />
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
            <div className="doctor-profile-form-inputs">
              <input
                type="text"
                name="doctor-profile-first-name"
                id="doctor-profile-first-name"
                required
                placeholder="First Name"
              />
              <input
                type="text"
                name="doctor-profile-last-name"
                id="doctor-profile-last-name"
                required
                placeholder="Last Name"
              />
              <input
                type="email"
                name="doctor-profile-email"
                id="doctor-profile-email"
                required
                placeholder="Email"
              />
              <input
                type="text"
                name="doctor-profile-contact"
                id="doctor-profile-contact"
                required
                placeholder="Contact"
              />
              <textarea
                name="doctor-profile-case-description"
                id="doctor-profile-case-description"
                placeholder="Case Description"
              />
              <Button type="btn-pink-darkblue" text="Submit Now" />
            </div>
          </div>
        </div>
        <div className="doctor-profile-links">
          <h2>Our Experts</h2>
          {doctors.map(({ name, username, speciality }) => (
            <div
              className="doctor-profile-links-item"
              onClick={() => navigate(`/${username}`)}>
              <FaAngleDoubleRight />
              <div>
                <p className="doctor-profile-links-item-name">{name}</p>
                <p className="doctor-profile-links-item-speciality">
                  {speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
