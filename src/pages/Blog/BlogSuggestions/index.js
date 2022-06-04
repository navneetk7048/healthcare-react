import { Link } from "react-router-dom";

import { ButtonSpecial } from "../../../components/Button";
import PostList from "./PostList";

const BlogSuggestions = () => {
  return (
    <div className="blog-suggestions container">
      <div className="popular-posts">
        <h2>Popular Posts</h2>
        <PostList />
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
        </div>
      </div>
    </div>
  );
};

export default BlogSuggestions;
