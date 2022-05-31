import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";
import Info from "./Info";
import ExpertList from "../../components/ExpertList";
import HomeServices from "./HomeServices/";
import HomeTestimonials from "./HomeTestimonials/";
import doctors from "../../data/doctors-small";
import HomeLocation from "./HomeLocation";
import HomeBlog from "./HomeBlog";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="home">
      <Hero />
      <AppointmentForm />
      <Info />
      <HomeServices />
      <ExpertList
        heading="Meet Our Experts"
        text="Together own seas said fowl third herb saw also that had saying darkness
        may After together"
        doctors={doctors}
      />
      <HomeTestimonials />
      <HomeLocation />
      <HomeBlog />
    </div>
  );
};

export default Home;
