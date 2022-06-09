// Packages
import { Link, useParams } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import Avatar from "react-avatar";
import moment from "moment";
import { v4 as uuid } from "uuid";

// Components
import { ButtonSlide, ButtonSpecial } from "../components/Button";

// Data
import comments from "../data/comments";
import posts from "../data/posts";

// Functions
import { scrollToTop } from "../Functions";
import { isAlphabet, isEmailFormat, isRequired } from "../validations";

// Images
import serviceDetailImg from "../images/blog-detail-img.jpg";
import blogs from "../data/blogs";
import PageNotFound from "./PageNotFound";
import { useState } from "react";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const { id } = useParams();

  const [allComments, setComments] = useState(comments);

  let blog = {};

  if (id === "blog-detail") {
    blog = {
      title: "Evening Shall Appear Fruitful Brought Forth Signs His Name",
      date: "December 15, 2019",
    };
  } else {
    blog = blogs.find((blog) => String(blog.id) === id);
  }

  const [commentData, setCommentData] = useState({
    id: uuid(),
    name: "",
    email: "",
    comment: "",
    date: new Date(),
  });

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, comment } = commentData;

    isRequired(name, "Name");
    isAlphabet(name, "Name");

    isRequired(email, "Email");
    isEmailFormat(email, "Email");

    isRequired(comment, "Comment");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      validate();

      setCommentData({ ...commentData, date: new Date() });

      setComments([...allComments, commentData]);

      setCommentData({
        id: uuid(),
        name: "",
        email: "",
        comment: "",
        date: new Date(),
      });

      toast.success("Success");
    } catch (error) {
      toast.error(error);
    }
  };

  return blog ? (
    <div className="blog-detail">
      <div className="blog-intro">
        <div className="container">
          <h1>{blog.title}</h1>
          <p>
            {blog.date} / <span onClick={scrollToTop}>Lifestyle, Health</span>
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
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
            Food
          </ButtonSpecial>
          <ButtonSpecial
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
            Lifestyle
          </ButtonSpecial>
          <ButtonSpecial
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
            Healthcare
          </ButtonSpecial>
          <ButtonSpecial
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
            Treatment
          </ButtonSpecial>
          <ButtonSpecial
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
            Medical
          </ButtonSpecial>
          <ButtonSpecial
            variant="simple-tiffanyBlue"
            as={Link}
            to="/blog/blog-detail"
          >
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
            {allComments.map(({ name, date, comment }) => (
              <div className="blog-comments-item" key={id}>
                <Avatar name={name} round size="50" />
                <div className="blog-comments-text">
                  <p className="name">{name}</p>
                  <p>
                    {moment(date).format("MMM DD, YYYY @ HH:mm")}/{" "}
                    <span onClick={scrollToTop}>Reply</span>
                  </p>
                  <p>{comment}</p>
                </div>
              </div>
            ))}
          </div>
          <form
            className="blog-comments-form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h2>Add Comment</h2>
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={commentData.name}
            />
            <input
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={commentData.email}
            />
            <textarea
              name="comment"
              placeholder="Your Message"
              onChange={handleChange}
              value={commentData.comment}
            />
            <ButtonSlide variant="tartOrange-policeBlue">
              Submit Now
            </ButtonSlide>
          </form>
        </div>
      </div>
      <div className="blog-suggestions container">
        <div className="popular-posts">
          <h2>Popular Posts</h2>
          <div className="post-list">
            {posts.map(({ id, picture, title, date }) => (
              <div className="post" key={id}>
                <div className="post-picture">
                  <img src={picture} alt="" />
                </div>
                <div className="post-content">
                  <h3>
                    <Link to="/blog/blog-detail">{title}</Link>
                  </h3>
                  <p>{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <h3>Post Categories</h3>
            <div className="post-categories">
              <Link to="/blog/blog-detail">Health Care 37</Link>
              <Link to="/blog/blog-detail">Medical Treatment 23</Link>
              <Link to="/blog/blog-detail">Lifestyle 15</Link>
              <Link to="/blog/blog-detail">Fitness 27</Link>
              <Link to="/blog/blog-detail">Food 23</Link>
            </div>
          </div>
          <div>
            <h3>Tags</h3>
            <div className="post-tags">
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Food
              </ButtonSpecial>
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Lifestyle
              </ButtonSpecial>
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Healthcare
              </ButtonSpecial>
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Treatment
              </ButtonSpecial>
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Medical
              </ButtonSpecial>
              <ButtonSpecial
                variant="simple-tiffanyBlue"
                as={Link}
                to="/blog/blog-detail"
              >
                Technology
              </ButtonSpecial>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
};

console.log(comments);

export default BlogDetail;
