import Banner from "../../components/Banner";
import about from "../../assets/images/about-banner.jpg";

const About = () => {
  return (
    <div className="about">
      <Banner banner={about} previous="Home" current="About" title="About Us" />
    </div>
  );
};

export default About;
