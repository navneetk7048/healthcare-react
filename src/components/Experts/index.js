import { Link } from "react-router-dom";
import member1 from "../../assets/images/member-1.jpg";
import member2 from "../../assets/images/member-2.jpg";
import member3 from "../../assets/images/member-3.jpg";
import "./style.css";

const Experts = () => {
  return (
    <div className="experts-section container">
      <h1>Meet Our Experts</h1>
      <p>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <div className="experts">
        <div className="expert">
          <img className="expert-img" src={member1} alt="" />
          <div style={{ backgroundColor: "#f1f8fc" }}>
            <div className="slide">
              <h2>Bernice Ray</h2>
              <p>Chief Surgeon</p>
              <Link to="/" className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="expert">
          <img className="expert-img" src={member2} alt="" />
          <div style={{ backgroundColor: "#f1f8fc" }}>
            <div className="slide">
              <h2>Larissa Thomas</h2>
              <p>Otolaryngology</p>
              <Link to="/" className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="expert">
          <img className="expert-img" src={member3} alt="" />
          <div style={{ backgroundColor: "#f1f8fc" }}>
            <div className="slide">
              <h2>Jason Bolton</h2>
              <p>Neurosurgery</p>
              <Link to="/" className="btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/our-doctors" className="btn">
          Meet our all experts
        </Link>
      </div>
    </div>
  );
};

export default Experts;
