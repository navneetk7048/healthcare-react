import { FaQuoteLeft } from "react-icons/fa";

import goalSec from "../../../images/goal-sec.jpg";

const AboutGoal = () => {
  return (
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
            made subdue face beginning abundantly sea, saw don't. Behold and his
            heaven together set multiply won't appear kind fourth the firmament
            he you're which herb. Good there had may itself called heaven you
            night.
          </p>
          <p>
            Sea. That darkness spirit, him earth itself beast bring abundantly
            there man night also waters light moving us heaven divided land meat
            green have darkness life very very replenish won't above forth his
            very rule own great.
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
  );
};

export default AboutGoal;
