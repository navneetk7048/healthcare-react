import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft, FaRegTimesCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import { ButtonSlide } from "../components/Button";
import ExpertList from "../components/ExpertList";

import doctors from "../data/doctors";

import hero1 from "../images/hero-img1.jpg";
import hero2 from "../images/hero-img2.jpg";

import hostpitalBed from "../icons/hospital-bed.png";
import idCard from "../icons/id-card.png";
import doctor from "../icons/doctor.png";
import volunteer from "../icons/volunteer.png";
import healthcare from "../icons/healthcare.png";
import brain from "../icons/brain.png";
import stethoscope from "../icons/stethoscope.png";
import heartbeat from "../icons/heartbeat.png";
import dentalCare from "../icons/dental-care.png";
import bone from "../icons/bone.png";
import videoIcon from "../images/video-icon.png";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";

import {
  isValidName,
  isValidEmail,
  isValidDate,
  isValidService,
} from "../Functions";

const Home = () => {
  const [click, setClick] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 40000, min: 1000 },
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      isValidName(formData.name);
      isValidEmail(formData.email);
      isValidService(formData.service);
      isValidDate(formData.date);
      alert("Success");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
        >
          <div className="hero-img">
            <img src={hero1} alt="" />
            <div className="hero-img-text">
              <h1>Getting You Back To Better.</h1>
              <p>
                Have saw replenish saw made bring creature whales darkness
                evening
              </p>
            </div>
          </div>
          <div className="hero-img">
            <img src={hero2} alt="" />
            <div className="hero-img-text">
              <h1>Getting You Back To Better.</h1>
              <p>
                Have saw replenish saw made bring creature whales darkness
                evening
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="home-appointment container">
        <div className="home-appointment-label">
          <h2>Make an appointment</h2>
          <div className="separator" />
          <p>A specialist will contact you shortly</p>
        </div>
        <form
          className="home-appointment-form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name*"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email*"
            onChange={handleChange}
            value={formData.email}
          />
          <select
            name="service"
            id="service"
            onChange={handleChange}
            value={formData.service}
          >
            <option value="">Select Service</option>
            <option value="emergency-care">Emergency Care</option>
            <option value="neurology">Neurology</option>
            <option value="pediatry">Pediatry</option>
            <option value="cardiology">Cardiology</option>
            <option value="dentistry">Dentistry</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            value={formData.date}
          />
          <ButtonSlide variant="white-tiffanyBlue">
            Book Appointment
          </ButtonSlide>
        </form>
      </div>
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
            Have saw replenish saw made bring creature whales darkness evening
            own without fowl waters land beginning great firmament. I Hath there
            without fowl third. Moveth bring years. Night seed whales you. Midst
            gathering given.
          </p>
          <div className="icons">
            <div className="icon">
              <img src={hostpitalBed} alt="" />
              <p className="numbers">800+</p>
              <p className="icon-name">Beds</p>
            </div>
            <div className="icon">
              <img src={idCard} alt="" />
              <p className="numbers">1200+</p>
              <p className="icon-name">Members</p>
            </div>
            <div className="icon">
              <img src={doctor} alt="" />
              <p className="numbers">550+</p>
              <p className="icon-name">Doctors</p>
            </div>
            <div className="icon">
              <img src={volunteer} alt="" />
              <p className="numbers">600+</p>
              <p className="icon-name">Volunteers</p>
            </div>
          </div>
        </div>
        <div className="info-right">
          <h3>Need an Emergency Help? Call Us!</h3>
          <a href="tel:#">+61 (0) 383 766 284</a>
          <div className="separator" />
          <p>
            Day can't. Very living lesser multiply the herb, fly. Brought over
            us seasons greater, land sea, the created gathered bring spirit
            whose upon years fruitful third dominion cattle midst night morning
            bring.
          </p>
          <ButtonSlide variant="tiffanyBlue-tartOrange" as={Link} to="/contact">
            Contact Us
          </ButtonSlide>
        </div>
      </div>
      <div className="home-services">
        <div className="container">
          <div className="home-services-text">
            <h1>Healthcare You Can Trust</h1>
            <p>
              Behold divided behold. In fly. Doesn't you'll heaven subdue
              creepeth air him divide give days image over called. Without him,
              night above subdue you'll let under multiply let firmament void
              that had don't called living it signs it, god. Gathered years
              multiply that that days signs void creepeth Together in face for
              he can't us. Seas air beast behold creature itself herb place,
              days.
            </p>
            <ButtonSlide
              variant="tartOrange-policeBlue"
              as={Link}
              to="/services"
            >
              See All Services
            </ButtonSlide>
          </div>
          <div className="icons">
            <Link className="icon" to="/services/service-detail">
              <img src={healthcare} alt="" />
              <p>Emergency Care</p>
            </Link>
            <Link className="icon" to="/services/service-detail">
              <img src={brain} alt="" />
              <p>Neurology</p>
            </Link>
            <Link className="icon" to="/services/service-detail">
              <img src={stethoscope} alt="" />
              <p>Pediatry</p>
            </Link>
            <Link className="icon" to="/services/service-detail">
              <img src={heartbeat} alt="" />
              <p>Cardiology</p>
            </Link>
            <Link className="icon" to="/services/service-detail">
              <img src={dentalCare} alt="" />
              <p>Dentistry</p>
            </Link>
            <Link className="icon" to="/services/service-detail">
              <img src={bone} alt="" />
              <p>Orthopedics</p>
            </Link>
          </div>
        </div>
      </div>
      <ExpertList heading="Meet Our Experts" doctors={doctors.slice(0, 3)} />
      <div className="home-testimonials container">
        <div className={`home-testimonials-video ${click}`}>
          <div className="iframe-div">
            <iframe
              src="https://www.youtube.com/embed/xcJtL7QggTI"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
            <FaRegTimesCircle onClick={() => setClick(false)} />
          </div>
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
            autoPlaySpeed={3000}
          >
            <div className="testimonial">
              <fieldset>
                <legend>
                  <FaQuoteLeft />
                </legend>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae dolorum temporibus omnis quis. Aut iste et,
                  maiores minus ipsa perspiciatis? Animi recusandae qui nulla
                  illum provident harum dolore debitis esse.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae dolorum temporibus omnis quis. Aut iste et,
                  maiores minus ipsa perspiciatis? Animi recusandae qui nulla
                  illum provident harum dolore debitis esse.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae dolorum temporibus omnis quis. Aut iste et,
                  maiores minus ipsa perspiciatis? Animi recusandae qui nulla
                  illum provident harum dolore debitis esse.
                </p>
              </fieldset>
              <p>
                <span className="patient-name">John Doe</span> - Satisfied
                Patient
              </p>
            </div>
          </Carousel>
          <p className="all-testimonials">
            <Link to="/testimonials">View All Testimonials</Link>
          </p>
        </div>
      </div>
      <div className="home-location container">
        <h2>Find a Healthcare Facilities</h2>
        <h1>Near You</h1>
        <ButtonSlide variant="tiffanyBlue-tartOrange" as={Link} to="/locations">
          Healthcare Locations
        </ButtonSlide>
      </div>
      <div className="home-blog container">
        <h1>A healthcare Blog</h1>
        <p>
          Together own seas said fowl third herb saw also that had saying
          darkness may After together
        </p>
        <div className="home-blog-list">
          <div className="home-blog-item">
            <img src={blog1} alt="" />
            <Link to="/blog/blog-detail">
              From Fowl Moving Night Our Wherein Herb Seed
            </Link>
            <p>Sept 03, 2019</p>
          </div>
          <div className="home-blog-item">
            <img src={blog2} alt="" />
            <Link to="/blog/blog-detail">
              Morning Forth There Him Great Darker Lights
            </Link>
            <p>Sept 03, 2019</p>
          </div>
          <div className="home-blog-item">
            <img src={blog3} alt="" />
            <Link to="/blog/blog-detail">
              Above Darkness Lights Day Blessed Third For Image
            </Link>
            <p>Sept 03, 2019</p>
          </div>
        </div>
        <ButtonSlide variant="tiffanyBlue-tartOrange" as={Link} to="/blog">
          See All Healthcare Blog
        </ButtonSlide>
      </div>
    </div>
  );
};

export default Home;
