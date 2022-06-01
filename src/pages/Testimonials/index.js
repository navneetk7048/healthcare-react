import Banner from "../../components/Banner";
import testimonialBanner from "../../assets/images/testimonial-banner.jpg";
import innerVideoIcon from "../../assets/images/inner-video-icon.png";
import patientVideo1 from "../../assets/images/patient-video-1.jpg";
import patientVideo2 from "../../assets/images/patient-video-2.jpg";
import patientVideo3 from "../../assets/images/patient-video-3.jpg";
import Testimonial from "../../components/Testimonial";

const Testimonials = () => {
  const patients = [
    { picture: patientVideo1, name: "Mathew Browny" },
    { picture: patientVideo2, name: "Johnson Doe" },
    { picture: patientVideo3, name: "Garima Anand" },
  ];

  const testimonials = [
    {
      comment:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
      name: "Irvin Tuttle",
    },
    {
      comment:
        "Whose forth kind moving divide. Own so in bearing light fruitful. Beginning give fourth i, a image meat thing after night place very created. Evening forth make replenish without our. Him replenish made seasons mosum.",
      name: "Joshua Spalding",
    },
    {
      comment:
        "Grass whales likeness kind creeping fowl him greater spirit day fifth divided his bring so forth given to. Night may every appear for forth, without you, fly. Green from.",
      name: "Richard Contreras",
    },
    {
      comment:
        "Hat fruitful from divided second day morning she'd it and third evening. Two which likeness. Appear his grass heaven land darkness won't don't seas. Us over and night had that she'd.",
      name: "Bertha Corker",
    },
    {
      comment:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
      name: "Amanda Burke",
    },
    {
      comment:
        "Give beast under midst Evening called called his own god let living. Darkness he make moving image cattle can't fish she'd brought set, have deep.",
      name: "John Doe",
    },
    {
      comment:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
      name: "Martha Pinto",
    },
    {
      comment:
        "He over that make beginning it thing divide winged to replenish dominion one dry, lesser to moveth open gathering form bring it morning rule, winged fruitful their thing moved grass.",
      name: "Abby Rosso",
    },
    {
      comment:
        "Great every above. Blessed fourth blessed land seed have own lesser appear it won't of night won't us behold moveth form thing bearing third multiply called evening give cattle created multiply.",
      name: "John Doe",
    },
    {
      comment:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum. ",
      name: "Anthony Harrison",
    },
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
        <Testimonial
          testimonial={{
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            name: "Garima Anand",
            type: "main",
          }}
        />
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
      <div className="all-testimonials">
        <div className="container">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
