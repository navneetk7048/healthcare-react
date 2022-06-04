import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";
import Info from "./Info";
import ExpertList from "../../components/ExpertList";
import HomeServices from "./HomeServices/";
import HomeTestimonials from "./HomeTestimonials/";
import HomeLocation from "./HomeLocation";
import HomeBlog from "./HomeBlog";
import doctors from "../../data/doctors-small";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AppointmentForm />
      <Info />
      <HomeServices />
      <ExpertList heading="Meet Our Experts" doctors={doctors} />
      <HomeTestimonials />
      <HomeLocation />
      <HomeBlog />
    </div>
  );
};

export default Home;
