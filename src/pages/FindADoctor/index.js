import Banner from "../../components/Banner";
import Note from "../../components/Note";
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
      <div className="doctor-search container">
        <Note text="To find your doctor, please use the search options below:" />
      </div>
    </div>
  );
};

export default OurDoctors;
