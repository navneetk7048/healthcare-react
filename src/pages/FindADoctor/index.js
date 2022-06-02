import Banner from "../../components/Banner";
import Note from "../../components/Note";
import about from "../../images/about-banner.jpg";
import SearchBox from "../../components/SearchBox";
import Button from "../../components/Button";

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
        <Note text="To find your doctor, please use the search options below:" />
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
        <Button type="btn-blue-pink" text="Meet Our All Experts" />
      </div>
    </div>
  );
};

export default OurDoctors;
