import Banner from "../../components/Banner";
import AboutContent from "./AboutContent";
import AboutShowcase from "./AboutShowcase";
import ExpertList from "../../components/ExpertList";
import AboutAppointment from "./AboutAppointment";
import { doctors } from "./doctors";
import about from "../../images/about-banner.jpg";
import AboutGoal from "./AboutGoal";

const About = () => {
  return (
    <div className="about">
      <Banner
        banner={about}
        previous={[{ text: "Home", link: "" }]}
        current="About"
        title="About Us"
      />
      <AboutContent />
      <AboutShowcase />
      <AboutAppointment />
      <AboutGoal />
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
