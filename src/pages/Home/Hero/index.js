import Carousel from "react-multi-carousel";
import hero1 from "../../../assets/images/hero-img1.jpg";
import hero2 from "../../../assets/images/hero-img2.jpg";

const Hero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 40000, min: 1000 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1000, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="hero">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}>
        <div className="hero-img">
          <img src={hero1} alt="" />
          <div className="hero-img-text">
            <h1>Getting You Back To Better.</h1>
            <p>
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero2} alt="" />
          <div className="hero-img-text">
            <h1>Getting You Back To Better.</h1>
            <p>
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
