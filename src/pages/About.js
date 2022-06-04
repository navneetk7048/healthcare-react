import { Link } from "react-router-dom";
import {
  FaBed,
  FaIdCard,
  FaUserMd,
  FaHandPaper,
  FaQuoteLeft,
} from "react-icons/fa";

import { ButtonSlide } from "../components/Button";
import Banner from "../components/Banner";
import ExpertList from "../components/ExpertList";
import doctors from "../data/doctors";
import about from "../images/about-banner.jpg";
import goalSec from "../images/goal-sec.jpg";
import weAreSec from "../images/we-are-sec.jpg";

const About = () => {
  return (
    <div className="about">
      <Banner
        banner={about}
        previous={[{ text: "Home", link: "" }]}
        current="About"
        title="About Us"
      />
      <div className="about-content container">
        <h2>Mission for greatness</h2>
        <p>
          Our, signs kind Moved were gathered. Living over herb of tree fowl,
          first hath, god years rule it bearing bring creeping. Bring light
          divided For morning give first saying every cattle place above spirit
          winged third it over you're hath set to for sea. Green likeness may
          fruit brought multiply divide together. Were morning our divided
          likeness fifth.
        </p>
      </div>
      <div className="about-showcase container">
        <div className="about-text">
          <h1>Who WE Are</h1>
          <p>
            Were. I stars years bearing. Two fruitful. Good yielding and was
            doesn't waters blessed over so behold every midst living. The the
            made subdue face beginning abundantly sea, saw don't. Behold and his
            heaven together set multiply won't appear kind fourth the firmament
            he you're which herb. Good there had may itself called heaven you
            night. Sea. That darkness spirit, him earth itself beast bring
            abundantly there man night also waters light moving us heaven
            divided land meat green have darkness life very very replenish won't
            above forth his very rule own great.
          </p>
        </div>
        <div className="icons">
          <div className="icon">
            <FaBed />
            <p> 800+</p>
            <p>Beds</p>
          </div>
          <div className="icon">
            <FaIdCard />
            <p> 1200+</p>
            <p>Team Members</p>
          </div>
          <div className="icon">
            <FaUserMd />
            <p> 550+</p>
            <p>Doctors</p>
          </div>
          <div className="icon">
            <FaHandPaper />
            <p> 600+</p>
            <p>Volunteers</p>
          </div>
        </div>
        <div className="about-showcase-image">
          <img src={weAreSec} alt="" />
        </div>
      </div>
      <div className="about-appointment">
        <div className="container">
          <h1>High-class specialists are ready to help you at any time.</h1>
          <p>
            Contact us any suitable way and make an appointment with the doctor
            whose help you need! Visit us at the scheduled time and get your
            treatment.
          </p>
          <ButtonSlide type="tartOrange-policeBlue" as={Link} to="/contact">
            Book An Appointment
          </ButtonSlide>
        </div>
      </div>
      <div className="about-goal">
        <div className="container">
          <div className="about-goal-image">
            <img src={goalSec} alt="" />
          </div>
          <div className="about-goal-text">
            <h1>Our Goal</h1>
            <p>
              Were. I stars years bearing. Two fruitful. Good yielding and was
              doesn't waters blessed over so behold every midst living. The the
              made subdue face beginning abundantly sea, saw don't. Behold and
              his heaven together set multiply won't appear kind fourth the
              firmament he you're which herb. Good there had may itself called
              heaven you night.
            </p>
            <p>
              Sea. That darkness spirit, him earth itself beast bring abundantly
              there man night also waters light moving us heaven divided land
              meat green have darkness life very very replenish won't above
              forth his very rule own great.
            </p>
          </div>
          <div className="about-goal-special ">
            <FaQuoteLeft />
            <p>
              Bring called dry seed likeness moved so together you days fruit
              evening wherein thing grass wherein man, that appear fly said he
              can't called gathered forth gathering she'd sea moved{" "}
            </p>
          </div>
        </div>
      </div>
      <ExpertList
        heading="Meet Our Experts"
        text="Together own seas said fowl third herb saw also that had saying darkness
        may After together"
        doctors={doctors.slice(0, 3)}
      />
    </div>
  );
};

export default About;
