import ExpertList from "../../components/ExpertList";
import AppointmentForm from "./AppointmentForm";
import Testimonials from "./Testimonials";
import Banner from "../../components/Banner";
import serviceBanner from "../../assets/images/service-banner.jpg";
import ServicesContent from "./ServicesContent";

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
      <ExpertList />
    </div>
  );
};

export default Services;
