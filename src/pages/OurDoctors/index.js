import drBanner from "../../assets/images/dr-banner.jpg";
import Banner from "../../components/Banner";

const OurDoctors = () => {
  return (
    <div className="our-doctors">
      <Banner
        banner={drBanner}
        previous="Home"
        current="Our Doctors"
        title="Meet Our Experts"
      />
    </div>
  );
};

export default OurDoctors;
