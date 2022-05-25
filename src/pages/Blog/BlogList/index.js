import { FaQuoteLeft, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

import innerBlog1 from "../../../assets/images/inner-blog-1.jpg";
import innerBlog2 from "../../../assets/images/inner-blog-2.jpg";
import innerBlog3 from "../../../assets/images/inner-blog-3.jpg";
import innerBlog4 from "../../../assets/images/inner-blog-4.jpg";
import innerBlog5 from "../../../assets/images/inner-blog-5.jpg";
import innerBlog6 from "../../../assets/images/inner-blog-6.jpg";
import innerBlog7 from "../../../assets/images/inner-blog-7.jpg";
import innerBlog8 from "../../../assets/images/inner-blog-8.jpg";

const BlogList = () => {
  return (
    <div className="blog-list container">
      <div className="blog-list-1">
        <div className="blog-item">
          <img src={innerBlog1} alt="" />
          <p className="blog-date">December 15, 2019</p>
          <h2 className="blog-title">
            Evening Shall Appear Fruitful Brought Forth Signs His Name
          </h2>
          <p className="blog-text">
            Abundantly a for the beginning waters of spirit above, evening
            beginning herb...
          </p>
        </div>
        <div className="blog-item">
          <img src={innerBlog2} alt="" />
          <p className="blog-date">November 09, 2019</p>
          <h2 className="blog-title">Daily Morning Exercise Routine</h2>
          <p className="blog-text">
            Behold you'll days sea you're earth man created lights and for. Very
            them...
          </p>
        </div>
        <div className="blog-item">
          <div className="blog-date">September 13, 2019</div>
          <h2>Him Days Earth Saw Whales That Form Itself Evening</h2>
          <p className="blog-text">
            Place were in divide. There. Living creature said. Great fourth
            likeness lesser...
          </p>
        </div>
      </div>
      <div className="blog-list-2">
        <div className="blog-item-special-blue">
          <FaQuoteLeft />
          <h2>
            Second Yielding Wherein First Wherein A Sea Was God Green Don't Face
            Greater.Good Fourth A Had
          </h2>
          <p>Dieter Rams</p>
        </div>
        <div className="blog-item">
          <img src={innerBlog3} alt="" />
          <p className="blog-date">October 23, 2019</p>
          <h2>Lights Image Great Two Day Have Said Make Fruit.</h2>
          <p className="text">
            Abundantly a for the beginning waters of spirit above, evening
            beginning herb...
          </p>
        </div>
        <div className="blog-item">
          <img src={innerBlog4} alt="" />
          <p className="blog-date">September 03, 2019</p>
          <h2>Moving Beast Lights Form Let Open Sea</h2>
          <p className="blog-text">
            Abundantly a for the beginning waters of spirit above, evening
            beginning herb...
          </p>
        </div>
      </div>
      <div className="blog-list-3">
        <div className="blog-item">
          <img src={innerBlog5} alt="" />
          <p className="blog-date">December 09, 2019</p>
          <h2>Daily Morning Exercise Routine</h2>
          <p className="blog-text">
            Behold you'll days sea you're earth man created lights and for. Very
            them...
          </p>
        </div>
        <div className="blog-item-special-white">
          <FaLink />
          <h2>
            Cattle Day She'd Over Saying Man Which Void Likeness Their Set
            Living
          </h2>
          <Link to="/">www.healthcare.com</Link>
        </div>
        <div className="blog-item">
          <img src={innerBlog6} alt="" />
          <p className="blog-date">September 12, 2019</p>
          <h2>Bearing Winged Lights Fourth Seed Them Fruit To</h2>
          <p className="blog-text">
            Behold you'll days sea you're earth man created lights and for. Very
            them...
          </p>
        </div>
      </div>
      <div className="blog-list-4">
        <div className="blog-item">
          <img src={innerBlog7} alt="" />
          <p className="blog-date">December 04, 2019</p>
          <h2>Also Creature Morning Likeness Moved Years God</h2>
          <p className="blog-text">
            Place were in divide. There. Living creature said. Great fourth
            likeness lesser...
          </p>
        </div>
        <div className="blog-item">
          <img src={innerBlog8} alt="" />
          <p className="blog-date">October 09, 2019</p>
          <h2>Green Whales Fruitful One Together Fly Saw Life Saying Light</h2>
          <p className="blog-text">
            Place were in divide. There. Living creature said. Great fourth
            likeness lesser...
          </p>
        </div>
        <div className="blog-item-special-pink">
          <FaLink />
          <h2>
            Cattle Day She'd Over Saying Man Which Void Likeness Their Set
            Living
          </h2>
          <Link to="/">www.healthcare.com</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
