import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import { scrollToTop } from "../Functions";
import contactBanner from "../images/location-banner.jpg";

import {
  isValidName,
  isValidPhone,
  isValidEmail,
  isValidMessage,
} from "../Functions";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = contactData;

    try {
      isValidName(name);
      isValidPhone(phone);
      isValidEmail(email);
      isValidMessage(message);
      alert("Success");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="contact">
      <Banner
        banner={contactBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Contact"
        title="Contact Us"
      />
      <div className="contact-form container">
        <form
          className="contact-form-left"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <h2>How Can We Help You Today?</h2>
          <p>
            Egestas suspendisse morbi quis pulvinar nam condimentum risus etiam
            blandit aptent curae rutrum feugiat.
          </p>
          <input name="name" placeholder="Your Name*" onChange={handleChange} />
          <input name="phone" placeholder="Phone*" onChange={handleChange} />
          <input name="email" placeholder="Email*" onChange={handleChange} />
          <textarea
            name="message"
            rows="4"
            placeholder="How May We Help You?"
            onChange={handleChange}
          />
          <ButtonSlide variant="tartOrange-policeBlue">Submit Now</ButtonSlide>
        </form>
        <div className="contact-form-right">
          <div>
            <FaPhoneAlt />
            <p>Call Us Today!</p>
            <a href="tel:5612231234">(561) 223-1234</a>
          </div>
          <div>
            <FaEnvelope />
            <p>Email Us</p>
            <a href="mailto:info@healthcare.com">info@healthcare.com</a>
          </div>
          <div>
            <p>Stay Conected With Us</p>
            <p className="social-media">
              <FaFacebookF onClick={scrollToTop} />
              <FaTwitter onClick={scrollToTop} />
              <FaYoutube onClick={scrollToTop} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
