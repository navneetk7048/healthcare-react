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

const Contact = () => {
  return (
    <div className="contact">
      <Banner
        banner={contactBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Contact"
        title="Contact Us"
      />
      <div className="contact-form container">
        <div className="contact-form-left">
          <h2>How Can We Help You Today?</h2>
          <p>
            Egestas suspendisse morbi quis pulvinar nam condimentum risus etiam
            blandit aptent curae rutrum feugiat.
          </p>
          <input
            type="text"
            name="contact-name"
            id="contact-name"
            placeholder="Your Name*"
          />
          <input
            type="text"
            name="contact-phone"
            id="contact-phone"
            placeholder="Phone*"
          />
          <input
            type="email"
            name="contact-email"
            id="contact-email"
            placeholder="Email*"
          />
          <textarea
            name="contact-comment"
            id="contact-comment"
            cols="50"
            rows="5"
            placeholder="How May We Help You?"
          />
          <ButtonSlide type="tartOrange-policeBlue">Submit Now</ButtonSlide>
        </div>
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
