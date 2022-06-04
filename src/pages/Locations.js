import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Banner from "../components/Banner";
import { ButtonSlide } from "../components/Button";
import locations from "../data/locations";
import locationBanner from "../images/location-banner.jpg";

const Locations = () => {
  return (
    <div className="locations ">
      <Banner
        banner={locationBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Locations"
        title="Locations"
      />
      <div className="location-list container">
        <h1>Healthcare Locations</h1>
        {locations.map(({ id, name, address, contact, iframe, link }) => (
          <>
            <hr className="location-separator" />
            <div className="location" key={id}>
              <div>
                <h2>{name}</h2>
                <p className="location-address">
                  <FaMapMarkerAlt /> {address}
                </p>
                <a href={`tel:${contact}`} className="location-contact">
                  <FaPhoneAlt /> {contact}
                </a>
                <ButtonSlide
                  type="tartOrange-policeBlue"
                  as="a"
                  href={link}
                  target="_blank">
                  Get Directions
                </ButtonSlide>
              </div>
              {iframe}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Locations;
