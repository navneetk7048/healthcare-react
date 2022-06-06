import Banner from "../components/Banner";
import Note from "../components/Note";
import about from "../images/about-banner.jpg";
import SearchBox from "../components/SearchBox";
import { ButtonSlide } from "../components/Button";

const OurDoctors = () => {
  return (
    <div className="find-a-doctor">
      <Banner
        banner={about}
        previous={[{ text: "Home", link: "" }]}
        current="Find Your Doctor"
        title="Physician Directory"
      />
      <div className="container">
        <Note>To find your doctor, please use the search options below:</Note>
        <SearchBox
          title="Search by Doctor Name"
          text="Enter the first letters of a doctor's last name."
          placeholder="Name"
        />
        <SearchBox
          title="Search by Condition or Specialty"
          text="Type a keyword, specialty or condition to find the right specialist."
          placeholder="Keyword"
        />
        <ButtonSlide type="tiffanyBlue-tartOrange">
          Meet Our All Experts
        </ButtonSlide>
      </div>
    </div>
  );
};

export default OurDoctors;