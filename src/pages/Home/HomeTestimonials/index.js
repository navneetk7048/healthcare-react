import { useState } from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaRegTimesCircle } from "react-icons/fa";
import videoIcon from "../../../assets/images/video-icon.png";
import videoImg from "../../../assets/images/video-img.jpg";

const HomeTestimonials = () => {
  const [click, setClick] = useState(false);

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
        <img src={videoImg} alt="" />
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
      <div className="home-testimonials-text">
        <h1>Why Our Patients choose healthcare</h1>
        <fieldset>
          <legend>
            <FaQuoteLeft />
          </legend>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae dolorum temporibus omnis quis. Aut iste et, maiores
            minus ipsa perspiciatis? Animi recusandae qui nulla illum provident
            harum dolore debitis esse.
          </p>
        </fieldset>
        <p>
          <span className="patient-name">John Doe</span> - Satisfied Patient
        </p>
        <p className="testimonial">
          <Link to="/">View All Testimonials</Link>
        </p>
      </div>
    </div>
  );
};

export default HomeTestimonials;
