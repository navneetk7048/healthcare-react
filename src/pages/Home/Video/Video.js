import { Link } from "react-router-dom";
import { FaQuoteLeft, FaRegTimesCircle } from "react-icons/fa";
import videoIcon from "../../../images/video-icon.png";
import "./Video.css";
import { useState } from "react";

const Video = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="video container">
      <div className={`iframe-div ${click}`}>
        <div className="iframe-container">
          <iframe
            width="600"
            height="300"
            src="https://www.youtube.com/embed/xcJtL7QggTI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <FaRegTimesCircle
            onClick={() => setClick(false)}
            style={{ marginTop: "-25px" }}
          />
        </div>
      </div>
      <div className="video-img">
        <div className="video-img-text">
          <p>Watch Healthcare Video</p>
          <img
            onClick={() => setClick(true)}
            src={videoIcon}
            alt="video icon"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="video-text">
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

export default Video;
