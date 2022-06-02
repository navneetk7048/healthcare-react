import { FaBed, FaIdCard, FaUserMd, FaHandPaper } from "react-icons/fa";

import weAreSec from "../../../images/we-are-sec.jpg";

const AboutShowcase = () => {
  return (
    <div className="about-showcase container">
      <div className="about-text">
        <h1>Who WE Are</h1>
        <p>
          Were. I stars years bearing. Two fruitful. Good yielding and was
          doesn't waters blessed over so behold every midst living. The the made
          subdue face beginning abundantly sea, saw don't. Behold and his heaven
          together set multiply won't appear kind fourth the firmament he you're
          which herb. Good there had may itself called heaven you night. Sea.
          That darkness spirit, him earth itself beast bring abundantly there
          man night also waters light moving us heaven divided land meat green
          have darkness life very very replenish won't above forth his very rule
          own great.
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
  );
};

export default AboutShowcase;
