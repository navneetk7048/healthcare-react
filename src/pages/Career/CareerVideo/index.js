import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import career1 from "../../../assets/images/career-1.jpg";
import career2 from "../../../assets/images/career-2.jpg";
import career3 from "../../../assets/images/career-3.jpg";
import innerVideoIcon from "../../../assets/images/inner-video-icon.png";

const CareerVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="career-video">
      <div className="career-video-text container">
        <h1>It's work that matters.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidata-bst non proident.
        </p>
        <Button
          type="btn-white-blue"
          text="View Current Openings"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="career-video-cards container">
        <div className="career-video-card">
          <div className="career-video-img">
            <img src={career1} alt="" />
            <div
              className="career-video-play"
              onClick={() => window.scroll(0, 0)}>
              <img src={innerVideoIcon} alt="" />
            </div>
          </div>
          <h2>The Work</h2>
          <p>
            Sodales cubilia arcu curabitur metus. Senectus convallis tristique.
            Habitant maecenas mauris justo venenatis sociosqu tempor, the arctu
            malesuadar habitant tellus sapien.
          </p>
        </div>
        <div className="career-video-card">
          <div className="career-video-img">
            <img src={career2} alt="" />
            <div
              className="career-video-play"
              onClick={() => window.scroll(0, 0)}>
              <img src={innerVideoIcon} alt="" />
            </div>
          </div>
          <h2>The People</h2>
          <p>
            Hac justo euismod amet condimentum etiam nulla ut donec lorem quam
            at dolor ipsum. Risus praesent elementum sodales lectus lacus
            pharetra hac montes integer, pretium justo class.
          </p>
        </div>
        <div className="career-video-card">
          <div className="career-video-img">
            <img src={career3} alt="" />
            <div
              className="career-video-play"
              onClick={() => window.scroll(0, 0)}>
              <img src={innerVideoIcon} alt="" />
            </div>
          </div>
          <h2>The Environment</h2>
          <p>
            Venenatis a ornare condimentum quam, augue habitasse platea enim
            feugiat nisi id habitasse faucibus senectus Magna. penatibus posuere
            the euismod ornare vivamus lectus torquent integer
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerVideo;