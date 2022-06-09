// Packages
import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteLeft } from "react-icons/fa";

import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import ExpertList from "../components/ExpertList";
import Note from "../components/Note";

import doctors from "../data/doctors";
import services from "../data/services";

import serviceBanner from "../images/service-banner.jpg";

import { toast } from "react-toastify";

import { isAlphabet, isEmailFormat, isRequired } from "../validations";

const Services = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, service, date } = formData;

    try {
      isRequired(name, "Name");
      isAlphabet(name, "Name");

      isRequired(email, "Email");
      isEmailFormat(email, "Email");

      isRequired(service, "Service");

      isRequired(date, "Date");

      toast.success("Success");
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
  };

  return (
    <div className="services">
      <Banner
        banner={serviceBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Our Services"
        title="Our Services"
      />
      <div className="services-content">
        <div className=" container">
          <div className="services-content-heading">
            <h2>Wide range of medical services</h2>
            <p>
              You're day midst of brought. Winged together which forth itself in
              you air dominion good darkness seed upon be made upon i moved
              itself had divided lights. Had fifth, a fifth Cattle earth. Fruit
              dry isn't dominion cattle fourth thing upon darkness midst the
              give herb you're there heaven the.
            </p>
          </div>
          <div className="services-cards">
            {services.map(({ id, title }) => (
              <div className="services-card" key={id}>
                <Link to={`/services/${id}`}>{title}</Link>
              </div>
            ))}
          </div>
          <Note>
            Didn't find what you are looking for?{" "}
            <Link to="/contact">Contact us</Link> today to learn more about the
            healthcare services we provide.
          </Note>
        </div>
      </div>
      <div className="appointment">
        <div className="container">
          <h2 className="appointment-label">Make an appointment</h2>
          <form
            className="appointment-form"
            noValidate
            onSubmit={handleSubmit}
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
              <option value="null">Select Service</option>
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
      </div>
      <div className="testimonials-section">
        <div className="container">
          <h1>Why Our Patients choose healthcare</h1>
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
      <ExpertList heading="Meet Our Experts" doctors={doctors.slice(0, 3)} />
    </div>
  );
};

export default Services;
