import Banner from "../../components/Banner";
import ExpertList from "../../components/ExpertList";
import doctors from "../../data/doctors";
import drBanner from "../../images/dr-banner.jpg";

const OurDoctors = () => {
  return (
    <div className="our-doctors">
      <Banner
        banner={drBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Our Doctors"
        title="Meet Our Experts"
      />
      <ExpertList
        heading="Better Doctors. Better Care."
        text="Together own seas said fowl third herb saw also that had saying darkness may After together"
        doctors={doctors}
      />
    </div>
  );
};

export default OurDoctors;
