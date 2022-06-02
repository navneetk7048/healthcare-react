import { Link } from "react-router-dom";
import Note from "../../../components/Note";

const ServicesContent = () => {
  return (
    <div className="services-content">
      <div className=" container">
        <div className="services-content-heading">
          <h2>Wide range of medical services</h2>
          <p>
            You're day midst of brought. Winged together which forth itself in
            you air dominion good darkness seed upon be made upon i moved itself
            had divided lights. Had fifth, a fifth Cattle earth. Fruit dry isn't
            dominion cattle fourth thing upon darkness midst the give herb
            you're there heaven the.
          </p>
        </div>
        <div className="services-cards">
          <div className="services-card">
            <Link to="/services/service-detail">24/7 Emergency Care</Link>
          </div>
          <div className="services-card">
            <Link to="/">Primary Care</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">
              Neurology & Sleep Medicine
            </Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Ophthamology</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Cardiology</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Home Care Services</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">
              Behavioral & Mental Health
            </Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Diagnostic Imaging</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">
              Physical Therapy & Rehabilitation
            </Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Orthopedics</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">Surgical Services</Link>
          </div>
          <div className="services-card">
            <Link to="/services/service-detail">
              Wound Care & Hyperbaric Medicine
            </Link>
          </div>
        </div>
        <Note
          text={`Didn't find what you are looking for? 
          ${(<Link to="/contact">Contact us</Link>)} 
          today to learn more about the
        healthcare services we provide.`}
        />
      </div>
    </div>
  );
};

export default ServicesContent;
