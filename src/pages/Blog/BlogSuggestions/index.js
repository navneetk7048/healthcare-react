import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import PostList from "./PostList";

const BlogSuggestions = () => {
  const navigate = useNavigate();

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
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Food
            </Button>
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Lifestyle
            </Button>
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Healthcare
            </Button>
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Treatment
            </Button>
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Medical
            </Button>
            <Button
              type="btn-simple-blue"
              onClick={() => navigate("/blog/blog-detail")}>
              Technology
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSuggestions;
