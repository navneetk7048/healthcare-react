import Banner from "../../components/Banner";
import locationBanner from "../../assets/images/location-banner.jpg";

const Locations = () => {
  return (
    <div className="">
      <Banner
        banner={locationBanner}
        previous="Home"
        current="Locations"
        title="Locations"
      />
    </div>
  );
};

export default Locations;
