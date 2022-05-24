import { Link } from "react-router-dom";

import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";
import ExpertList from "../../components/ExpertList";
import Introduction from "./Introduction/";
import HomeServices from "./HomeServices/";
import Video from "./Video/";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import member1 from "../../assets/images/member-1.jpg";
import member2 from "../../assets/images/member-2.jpg";
import member3 from "../../assets/images/member-3.jpg";

const Home = () => {
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
    <div className="">
      <Hero />
      <AppointmentForm />
      <Introduction />
      <HomeServices />
      <ExpertList
        heading="Meet Our Experts"
        text="Together own seas said fowl third herb saw also that had saying darkness
        may After together"
        doctors={doctors}
      />
      <Video />
      <div className="location-bg container">
        <h2>Find a Healthcare Facilities</h2>
        <h1>Near You</h1>
        <div style={{ textAlign: "center" }}>
          <Link to="/locations" className="btn btn-blue">
            Healthcare Locations
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="home-blog">
          <h1>A healthcare Blog</h1>
          <p>
            Together own seas said fowl third herb saw also that had saying
            darkness may After together
          </p>
          <div className="blogs">
            <div className="blog">
              <img src={blog1} alt="blog-1" />
              <p>
                <Link to="/">From Fowl Moving Night Our Wherein Herb Seed</Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
            <div className="blog">
              <img src={blog2} alt="blog-2" />
              <p>
                <Link to="/">Morning Forth There Him Great Darker Lights</Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
            <div className="blog">
              <img src={blog3} alt="blog-3" />
              <p>
                <Link to="/">
                  Above Darkness Lights Day Blessed Third For Image
                </Link>
              </p>
              <p>Sept 03, 2019</p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/blog" className="btn btn-blue">
              see all healthcare blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
