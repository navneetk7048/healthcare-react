import Banner from "../../components/Banner";
import careerBanner from "../../assets/images/career-banner.jpg";

const Career = () => {
  return (
    <div className="career">
      <Banner
        banner={careerBanner}
        previous="Home"
        current="Career"
        title="We're Hiring!"
      />
    </div>
  );
};

export default Career;
