import emailjs from "emailjs-com";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import { scrollToTop } from "../Functions";
import contactBanner from "../images/location-banner.jpg";
import {
  isAlphabet,
  isEmailFormat,
  isRequired,
  isValidPhone,
} from "../validations";

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

  const validate = () => {
    const { name, phone, email, message } = contactData;

    try {
      isRequired(name, "Name");
      isAlphabet(name, "Name");

      isRequired(phone, "Phone number");
      isValidPhone(phone, "Phone number");

      isRequired(email, "Email");
      isEmailFormat(email, "Email");

      isRequired(message, "Message");

      return true;
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          contactData,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          toast.success("Success");
          setContactData({ name: "", phone: "", email: "", message: "" });
        })
        .catch(() => toast.error("Failed"));
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
          <input
            name="name"
            placeholder="Your Name*"
            onChange={handleChange}
            value={contactData.name}
          />
          <input
            name="phone"
            placeholder="Phone*"
            onChange={handleChange}
            value={contactData.phone}
          />
          <input
            name="email"
            placeholder="Email*"
            onChange={handleChange}
            value={contactData.email}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="How May We Help You?"
            onChange={handleChange}
            value={contactData.message}
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
