import Banner from "../../components/Banner";
import ServicesContent from "./ServicesContent";
import AppointmentForm from "./AppointmentForm";
import Testimonials from "./Testimonials";
import ExpertList from "../../components/ExpertList";
import serviceBanner from "../../assets/images/service-banner.jpg";
import member1 from "../../assets/images/member-1.jpg";
import member2 from "../../assets/images/member-2.jpg";
import member3 from "../../assets/images/member-3.jpg";

const Services = () => {
  const doctors = [
    {
      id: 1,
      name: "Bernice Ray",
      speciality: "Chief surgeon",
      picture: member1,
    },
    {
      id: 2,
      name: "Larissa Thomas",
      speciality: "Otolaryngology",
      picture: member2,
    },
    {
      id: 3,
      name: "Jason Bolton",
      speciality: "Neurosurgery",
      picture: member3,
    },
  ];

  return (
    <div className="services">
      <Banner
        banner={serviceBanner}
        previous="Home"
        current="Our Services"
        title="Our Services"
      />
      <ServicesContent />
      <AppointmentForm />
      <Testimonials />
      <ExpertList
        heading="Meet Our Experts"
        text="Together own seas said fowl third herb saw also that had saying darkness may After together"
        doctors={doctors}
      />
    </div>
  );
};

export default Services;
