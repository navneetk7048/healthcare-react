import Carousel from "react-multi-carousel";
import { FaQuoteLeft } from "react-icons/fa";

const Video = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1000, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="testimonials-section">
      <div className="container">
        <h1>Why Our Patients choose healthcare</h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}>
          <div className="testimonials">
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  Evening over without above be won't yielding days man, there.
                  She'd man you female stars life darkness upon fly likeness
                  That and fly creature image, all open divided won't blessed,
                  can't after set fill dry creeping.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">John Doe</span> - Satisfied
                Patient
              </p>
            </div>
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  You're day midst of brought. Winged together which forth
                  itself in you air dominion good darkness seed upon be made
                  upon i moved itself had divided lights. Fifth Cattle earth.
                  Fruit dry isn't dominion cattle fourth.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">Nina Thomas</span> - Satisfied
                Patient
              </p>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  Evening over without above be won't yielding days man, there.
                  She'd man you female stars life darkness upon fly likeness
                  That and fly creature image, all open divided won't blessed,
                  can't after set fill dry creeping.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">John Doe</span> - Satisfied
                Patient
              </p>
            </div>
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  You're day midst of brought. Winged together which forth
                  itself in you air dominion good darkness seed upon be made
                  upon i moved itself had divided lights. Fifth Cattle earth.
                  Fruit dry isn't dominion cattle fourth.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">Nina Thomas</span> - Satisfied
                Patient
              </p>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  Evening over without above be won't yielding days man, there.
                  She'd man you female stars life darkness upon fly likeness
                  That and fly creature image, all open divided won't blessed,
                  can't after set fill dry creeping.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">John Doe</span> - Satisfied
                Patient
              </p>
            </div>
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  You're day midst of brought. Winged together which forth
                  itself in you air dominion good darkness seed upon be made
                  upon i moved itself had divided lights. Fifth Cattle earth.
                  Fruit dry isn't dominion cattle fourth.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">Nina Thomas</span> - Satisfied
                Patient
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Video;
