import Banner from "../../components/Banner";
import ServicesContent from "./ServicesContent";
import AppointmentForm from "./AppointmentForm";
import Testimonials from "./Testimonials";
import ExpertList from "../../components/ExpertList";
import doctors from "../../data/doctors-small";
import serviceBanner from "../../assets/images/service-banner.jpg";

const Services = () => {
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
