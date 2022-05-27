import Banner from "../../components/Banner";
import careerBanner from "../../assets/images/career-banner.jpg";
import CareerVideo from "./CareerVideo";
import CareerLife from "./CareerLife";
import CareerSlider from "./CareerSlider";

const Career = () => {
  return (
    <div className="career">
      <Banner
        banner={careerBanner}
        previous="Home"
        current="Career"
        title="We're Hiring!"
      />
      <CareerVideo />
      <CareerLife />
      <CareerSlider />
    </div>
  );
};

export default Career;
