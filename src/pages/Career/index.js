import Banner from "../../components/Banner";
import careerBanner from "../../assets/images/career-banner.jpg";
import CareerVideo from "./CareerVideo";
import CareerLife from "./CareerLife";
import CareerSlider from "./CareerSlider";
import CareerTestimonials from "./CareerTestimonials";
import CareerPositions from "./CareerPositions";

const Career = () => {
  return (
    <div className="career">
      <Banner
        banner={careerBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Career"
        title="We're Hiring!"
      />
      <CareerVideo />
      <CareerLife />
      <CareerSlider />
      <CareerTestimonials />
      <CareerPositions />
    </div>
  );
};

export default Career;
