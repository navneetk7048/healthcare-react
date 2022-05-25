import Banner from "../../components/Banner";
import AboutContent from "./AboutContent";
import AboutShowcase from "./AboutShowcase";
import ExpertList from "../../components/ExpertList";
import { doctors } from "./doctors";
import about from "../../assets/images/about-banner.jpg";

const About = () => {
  return (
    <div className="about">
      <Banner banner={about} previous="Home" current="About" title="About Us" />
      <AboutContent />
      <AboutShowcase />
      <ExpertList
        heading="Meet Our Experts"
        text="Together own seas said fowl third herb saw also that had saying darkness
        may After together"
        doctors={doctors}
      />
    </div>
  );
};

export default About;
