import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import careerSlide1 from "../../../images/career-slide-1.jpg";
import careerSlide2 from "../../../images/career-slide-2.jpg";
import careerSlide3 from "../../../images/career-slide-3.jpg";

const CareerSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 3,
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
    <div className="career-slider ">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}>
        <div>
          <img src={careerSlide1} alt="" />
        </div>
        <div>
          <img src={careerSlide2} alt="" />
        </div>
        <div>
          <img src={careerSlide3} alt="" />
        </div>
        <div>
          <img src={careerSlide1} alt="" />
        </div>
        <div>
          <img src={careerSlide2} alt="" />
        </div>
        <div>
          <img src={careerSlide3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default CareerSlider;
