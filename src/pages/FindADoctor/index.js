import Banner from "../../components/Banner";
import about from "../../assets/images/about-banner.jpg";

const OurDoctors = () => {
  return (
    <div className="find-a-doctor">
      <Banner
        banner={about}
        previous="Home"
        current="Find Your Doctor"
        title="Physician Directory"
      />
    </div>
  );
};

export default OurDoctors;
