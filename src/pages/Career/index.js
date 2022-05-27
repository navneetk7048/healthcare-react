import Banner from "../../components/Banner";
import careerBanner from "../../assets/images/career-banner.jpg";
import CareerVideo from "./CareerVideo";

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
    </div>
  );
};

export default Career;
