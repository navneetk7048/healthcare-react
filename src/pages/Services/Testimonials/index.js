import { FaQuoteLeft } from "react-icons/fa";
import "./style.css";

const Video = () => {
  return (
    <div className="testimonials-section">
      <div className="container">
        <h1>Why Our Patients choose healthcare</h1>
        <div className="testimonials">
          <div className="testimonial">
            <fieldset>
              <legend>
                <FaQuoteLeft />
              </legend>
              <p>
                Evening over without above be won't yielding days man, there.
                She'd man you female stars life darkness upon fly likeness That
                and fly creature image, all open divided won't blessed, can't
                after set fill dry creeping.
              </p>
            </fieldset>
            <p>
              <span className="patient-name">John Doe</span> - Satisfied Patient
            </p>
          </div>
          <div className="testimonial">
            <fieldset>
              <legend>
                <FaQuoteLeft />
              </legend>
              <p>
                You're day midst of brought. Winged together which forth itself
                in you air dominion good darkness seed upon be made upon i moved
                itself had divided lights. Fifth Cattle earth. Fruit dry isn't
                dominion cattle fourth.
              </p>
            </fieldset>
            <p>
              <span className="patient-name">Nina Thomas</span> - Satisfied
              Patient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
