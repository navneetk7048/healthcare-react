// Packages
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from "react-icons/fa";

// Components
import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";

// Data and Functions
import positions from "../data/positions";
import { scrollToTop } from "../Functions";

// Images
import careerBanner from "../images/career-banner.jpg";
import career1 from "../images/career-1.jpg";
import career2 from "../images/career-2.jpg";
import career3 from "../images/career-3.jpg";
import careerSlide1 from "../images/career-slide-1.jpg";
import careerSlide2 from "../images/career-slide-2.jpg";
import careerSlide3 from "../images/career-slide-3.jpg";
import innerVideoIcon from "../images/inner-video-icon.png";
import sunUmbrella from "../icons/sun-umbrella.png";
import lightHeartShape from "../icons/light-heart-shape.png";
import money from "../icons/money.png";
import mind from "../icons/mind.png";
import goal from "../icons/goal.png";
import theatre from "../icons/theatre.png";

const Career = () => {
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

  const responsiveSlider = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
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
    <div className="career">
      <Banner
        banner={careerBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Career"
        title="We're Hiring!"
      />
      <div className="career-video">
        <div className="career-video-text container">
          <h1>It's work that matters.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidata-bst non proident.
          </p>
          <a href="#career-positions" className="btn btn-white-blue">
            View Current Openings
          </a>
        </div>
        <div className="career-video-cards container">
          <div className="career-video-card">
            <div className="career-video-img">
              <img src={career1} alt="" />
              <div className="career-video-play" onClick={scrollToTop}>
                <img src={innerVideoIcon} alt="" />
              </div>
            </div>
            <h2>The Work</h2>
            <p>
              Sodales cubilia arcu curabitur metus. Senectus convallis
              tristique. Habitant maecenas mauris justo venenatis sociosqu
              tempor, the arctu malesuadar habitant tellus sapien.
            </p>
          </div>
          <div className="career-video-card">
            <div className="career-video-img">
              <img src={career2} alt="" />
              <div className="career-video-play" onClick={scrollToTop}>
                <img src={innerVideoIcon} alt="" />
              </div>
            </div>
            <h2>The People</h2>
            <p>
              Hac justo euismod amet condimentum etiam nulla ut donec lorem quam
              at dolor ipsum. Risus praesent elementum sodales lectus lacus
              pharetra hac montes integer, pretium justo class.
            </p>
          </div>
          <div className="career-video-card">
            <div className="career-video-img">
              <img src={career3} alt="" />
              <div className="career-video-play" onClick={scrollToTop}>
                <img src={innerVideoIcon} alt="" />
              </div>
            </div>
            <h2>The Environment</h2>
            <p>
              Venenatis a ornare condimentum quam, augue habitasse platea enim
              feugiat nisi id habitasse faucibus senectus Magna. penatibus
              posuere the euismod ornare vivamus lectus torquent integer
            </p>
          </div>
        </div>
      </div>
      <div className="career-life container">
        <h2>Life At Healthcare </h2>
        <div className="career-life-cards">
          <div className="career-life-card">
            <img src={sunUmbrella} alt="" />
            <h3>Paid parental leave</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div className="career-life-card">
            <img src={lightHeartShape} alt="" />
            <h3>Healthcare coverage</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div className="career-life-card">
            <img src={money} alt="" />
            <h3>Competitive compensation</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div className="career-life-card">
            <img src={mind} alt="" style={{ scale: "-1 1" }} />
            <h3>Work/life balance</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div className="career-life-card">
            <img src={goal} alt="" />
            <h3>Learning and development</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div className="career-life-card">
            <img src={theatre} alt="" />
            <h3>Culinary programs</h3>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
        </div>
      </div>
      <div className="career-slider ">
        <Carousel
          responsive={responsiveSlider}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div>
            <img src={careerSlide1} alt="" />
          </div>
          <div>
            <img src={careerSlide2} alt="" />
          </div>
          <div>
            <img src={careerSlide3} alt="" />
          </div>
          <div>
            <img src={careerSlide1} alt="" />
          </div>
          <div>
            <img src={careerSlide2} alt="" />
          </div>
          <div>
            <img src={careerSlide3} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="career-testimonials">
        <div className="container">
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="testimonials">
              <div className="testimonial">
                <fieldset>
                  <legend>
                    <FaQuoteLeft />
                  </legend>
                  <p>
                    Evening over without above be won't yielding days man,
                    there. She'd man you female stars life darkness upon fly
                    likeness That and fly creature image, all open divided won't
                    blessed, can't after set fill dry creeping.
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
                    Evening over without above be won't yielding days man,
                    there. She'd man you female stars life darkness upon fly
                    likeness That and fly creature image, all open divided won't
                    blessed, can't after set fill dry creeping.
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
                    Evening over without above be won't yielding days man,
                    there. She'd man you female stars life darkness upon fly
                    likeness That and fly creature image, all open divided won't
                    blessed, can't after set fill dry creeping.
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
      <div className="career-positions container" id="career-positions">
        <h2>Current Positions</h2>
        <div className="career-positions-cards">
          {positions.map(({ id, title, description }) => (
            <div className="career-positions-card" key={id}>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ButtonSlide
                variant="white-tartOrange"
                as={Link}
                to={`/career/${id}`}
              >
                Apply Now
              </ButtonSlide>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
