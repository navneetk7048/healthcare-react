import Banner from "../../components/Banner";
import testimonialBanner from "../../assets/images/testimonial-banner.jpg";
import innerVideoIcon from "../../assets/images/inner-video-icon.png";
import patientVideo1 from "../../assets/images/patient-video-1.jpg";
import patientVideo2 from "../../assets/images/patient-video-2.jpg";
import patientVideo3 from "../../assets/images/patient-video-3.jpg";

const Testimonials = () => {
  const patients = [
    { picture: patientVideo1, name: "Mathew Browny" },
    { picture: patientVideo2, name: "Johnson Doe" },
    { picture: patientVideo3, name: "Garima Anand" },
  ];

  return (
    <div className="testimonials">
      <Banner
        banner={testimonialBanner}
        previous={[
          { text: "Home", link: "" },
          { text: "Career", link: "career" },
        ]}
        current="Testimonials"
        title="What our customers are saying"
      />
      <div className="container">
        <div className="testimonials-video">
          {patients.map(({ picture, name }) => (
            <div className="testimonials-video-card">
              <div className="testimonials-video-card-img">
                <img src={picture} alt="" />
                <div
                  className="testimonials-video-play"
                  onClick={() => window.scroll(0, 0)}>
                  <img src={innerVideoIcon} alt="" />
                </div>
              </div>
              <p>
                <span>{name}</span> - Satisfied Patient
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
