import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import blog1 from "../../../images/blog-1.jpg";
import blog2 from "../../../images/blog-2.jpg";
import blog3 from "../../../images/blog-3.jpg";

const HomeBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="home-blog container">
      <h1>A healthcare Blog</h1>
      <p>
        Together own seas said fowl third herb saw also that had saying darkness
        may After together
      </p>
      <div className="home-blog-list">
        <div className="home-blog-item">
          <img src={blog1} alt="" />
          <Link to="/blog/blog-detail">
            From Fowl Moving Night Our Wherein Herb Seed
          </Link>
          <p>Sept 03, 2019</p>
        </div>
        <div className="home-blog-item">
          <img src={blog2} alt="" />
          <Link to="/blog/blog-detail">
            Morning Forth There Him Great Darker Lights
          </Link>
          <p>Sept 03, 2019</p>
        </div>
        <div className="home-blog-item">
          <img src={blog3} alt="" />
          <Link to="/blog/blog-detail">
            Above Darkness Lights Day Blessed Third For Image
          </Link>
          <p>Sept 03, 2019</p>
        </div>
      </div>
      <Button
        type="btn-blue-pink"
        text="See All Healthcare Blog"
        onClick={() => navigate("/blog")}
      />
    </div>
  );
};

export default HomeBlog;
