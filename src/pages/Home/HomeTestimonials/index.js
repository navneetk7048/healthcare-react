import { useState } from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaRegTimesCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";

import videoIcon from "../../../assets/images/video-icon.png";

const HomeTestimonials = () => {
  const [click, setClick] = useState(false);

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
    <div className="home-testimonials container">
      <div className={`home-testimonials-video ${click}`}>
        <iframe
          src="https://www.youtube.com/embed/xcJtL7QggTI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <FaRegTimesCircle onClick={() => setClick(false)} />
      </div>
      <div className="home-testimonials-img">
        {/* <img src={videoImg} alt="" /> */}
        <div className="home-testimonials-img-text">
          <p>Watch Healthcare Video</p>
          <img
            onClick={() => setClick(true)}
            src={videoIcon}
            alt="video icon"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="home-testimonials-text" style={{ overflow: "hidden" }}>
        <h1>Why Our Patients choose healthcare</h1>
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}>
          <div className="testimonial">
            <fieldset>
              <legend>
                <FaQuoteLeft />
              </legend>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae dolorum temporibus omnis quis. Aut iste et, maiores
                minus ipsa perspiciatis? Animi recusandae qui nulla illum
                provident harum dolore debitis esse.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae dolorum temporibus omnis quis. Aut iste et, maiores
                minus ipsa perspiciatis? Animi recusandae qui nulla illum
                provident harum dolore debitis esse.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae dolorum temporibus omnis quis. Aut iste et, maiores
                minus ipsa perspiciatis? Animi recusandae qui nulla illum
                provident harum dolore debitis esse.
              </p>
            </fieldset>
            <p>
              <span className="patient-name">John Doe</span> - Satisfied Patient
            </p>
          </div>
        </Carousel>
        <p className="all-testimonials">
          <Link to="/">View All Testimonials</Link>
        </p>
      </div>
    </div>
  );
};

export default HomeTestimonials;
