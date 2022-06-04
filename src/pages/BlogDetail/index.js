import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";

import { ButtonSpecial } from "../../components/Button";
import BlogSuggestions from "../Blog/BlogSuggestions";
import comments from "./comments";
import { scrollToTop } from "../../Functions";
import serviceDetailImg from "../../images/blog-detail-img.jpg";

const BlogDetail = () => {
  return (
    <div className="blog-detail">
      <div className="blog-intro">
        <div className="container">
          <h1>Evening Shall Appear Fruitful Brought Forth Signs His Name</h1>
          <p>
            December 15, 2019 /{" "}
            <span onClick={scrollToTop}>Lifestyle, Health</span>
          </p>
          <div>
            <img src={serviceDetailImg} alt="" />
            <p>
              Upon morning stars earth may let have whales seasons. Light
              created were wherein. She'd air be beast you're be dry their a
              without cattle he seas wherein divided itself. Fifth dry moving
              creeping in be one. Bring, own which, years give fish itself
              brought seed were forth winged divided creeping two called
              gathered set they're us evening two living first evening which
              heaven after. Deep. Abundantly one fill.
            </p>
            <p>
              Called open. Appear they're, under herb upon wherein light that
              in. Which made forth. And open first make lights yielding fruit.
              Said tree deep. Appear fish it. Earth him rule fourth saying.
              Signs male the heaven our good likeness over morning fill. It
              firmament fill have. Cattle be they're dry bearing i were, upon
              they're night were hath gathered place he the unto us their
              creature signs. All meat were give winged Heaven winged hath beast
              may.
            </p>
          </div>
          <div>
            <h2>Winged Blessed God Fruitful After The Darkness</h2>
            <p>
              Called open. Appear they're, under herb upon wherein light that
              in. Which made forth. And open first make lights yielding fruit.
              Said tree deep. Appear fish it. Earth him rule fourth saying.
              Signs male the heaven our good likeness over morning fill. It
              firmament fill have. Cattle be they're dry bearing i were, upon
              they're night were hath gathered place he the unto us their
              creature signs. All meat were give winged Heaven winged hath beast
              may.
            </p>
            <p>
              Creepeth. Midst female blessed dry a rule greater very living may
              grass made fruit fowl heaven from it which he years Their Itself.
              Whose whales god fish, one isn't, the our place face let face
              image wherein man void under, created won't night under first.
              Darkness is. Third behold said you're. Shall. Lesser. Dry.
            </p>
            <div className="note">
              <FaQuoteLeft />
              <p>
                This is a simple example of a styled blockquote. A blockquote
                tag typically specifies a section that is quoted from another
                source of some sort, or highlighting text in your post.
              </p>
            </div>
          </div>
          <div>
            <h2>
              Multiply Firmament Open You'll Own Great Winged Made Brought
            </h2>
            <p>
              Replenish itself fly all them first creepeth herb days you're
              blessed. Fifth brought over them creature, itself shall beast. Is
              good called light divided Saw Wherein great life face fruitful
              give, yielding. It, be so fruit bring. Deep one very i grass fill
              form fowl. Fruitful grass creepeth can't sea. She'd so creepeth
              wherein very moved rule. Can't unto give let multiply one deep
              own. Image shall above female open waters. Creeping moveth void.
              Every beast. Bearing under won't Under.
            </p>
            <p>
              Brought. It, brought two without the so were seas. Signs may
              subdue gathering there divided creature open set land form. Open
              open fourth air. Above fowl saying have, us. Dry from bring own,
              subdue under called multiply you third heaven midst cattle.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-tags container">
        <h1>Post Tags</h1>
        <div>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Food
          </ButtonSpecial>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Lifestyle
          </ButtonSpecial>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Healthcare
          </ButtonSpecial>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Treatment
          </ButtonSpecial>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Medical
          </ButtonSpecial>
          <ButtonSpecial
            type="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail">
            Technology
          </ButtonSpecial>
        </div>
        <div className="separator" />
        <div className="directions">
          <div>
            <Link to="/blog/blog-detail">
              <span>Previous Post</span>{" "}
              <p className="title">Moving Beast Lights Form Let Open Sea</p>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <span>Next Post</span>{" "}
              <p className="title">Daily Morning Exercise Routine</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-comments">
        <div className="container">
          <h2>{comments.length} Comments</h2>
          <div className="blog-comments-list">
            {comments.map(({ name, profile, date, time, text }) => (
              <div className="blog-comments-item">
                <img src={profile} alt="" />
                <div className="blog-comments-text">
                  <p className="name">{name}</p>
                  <p>
                    {date} @ {time} / <Link to="/blog/blog-detail">Reply</Link>
                  </p>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-comments-form">
            <h2>Add Comment</h2>
            <input
              type="text"
              name="comments-name"
              id="comments-name"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="comments-email"
              id="comments-email"
              placeholder="Your Email"
            />
            <textarea placeholder="Your Message" />
            <ButtonSpecial type="tartOrange-policeBlue">
              Submit Now
            </ButtonSpecial>
          </div>
        </div>
      </div>
      <BlogSuggestions />
    </div>
  );
};

export default BlogDetail;
