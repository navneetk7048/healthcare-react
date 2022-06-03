import { useNavigate } from "react-router-dom";
import { FaBed, FaIdCard, FaUserMd, FaHandPaper } from "react-icons/fa";

import Button from "../../../components/Button";

const Info = () => {
  let navigate = useNavigate();

  return (
    <div className="info container">
      <div className="info-left">
        <h2>The Right Care. Right Now.</h2>
        <p>
          Multiply very years also midst fill fruitful you're moving day. Were
          without man replenish. Air the, is was moveth gathering you're rule
          called let spirit ughf brought green forth so cattle waters stars
          there she'd moveth. Thing years have firmament upon first subdue
          blessed sea stars spirit said. Evening you're them.
        </p>
        <p>
          Have saw replenish saw made bring creature whales darkness evening own
          without fowl waters land beginning great firmament. I Hath there
          without fowl third. Moveth bring years. Night seed whales you. Midst
          gathering given.
        </p>
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
      </div>
      <div className="info-right">
        <h3>Need an Emergency Help? Call Us!</h3>
        <a href="tel:#">+61 (0) 383 766 284</a>
        <hr />
        <p>
          Day can't. Very living lesser multiply the herb, fly. Brought over us
          seasons greater, land sea, the created gathered bring spirit whose
          upon years fruitful third dominion cattle midst night morning bring.
        </p>
        <Button type="btn-blue-pink" onClick={() => navigate("/contact")}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Info;
