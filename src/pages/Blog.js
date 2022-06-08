// Packages
import { Link } from "react-router-dom";

// Components
import Banner from "../components/Banner";
import BlogList from "../components/BlogList";
import { ButtonSpecial } from "../components/Button";

// Data
import blogs from "../data/blogs";
import posts from "../data/posts";

// Images
import blogBanner from "../images/blog-banner.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <Banner
        banner={blogBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Blog"
        title="From Our Blog"
      />
      <BlogList blogs={blogs} />
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
  );
};

export default Blog;
