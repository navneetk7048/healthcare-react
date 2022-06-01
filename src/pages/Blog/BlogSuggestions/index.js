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
            <Link to="/blog-detail">Health Care 37</Link>
            <Link to="/blog-detail">Medical Treatment 23</Link>
            <Link to="/blog-detail">Lifestyle 15</Link>
            <Link to="/blog-detail">Fitness 27</Link>
            <Link to="/blog-detail">Food 23</Link>
          </div>
        </div>
        <div>
          <h3>Tags</h3>
          <div className="post-tags">
            <Button
              type="btn-simple-blue"
              text="Food"
              onClick={() => navigate("/blog-detail")}
            />
            <Button
              type="btn-simple-blue"
              text="Lifestyle"
              onClick={() => navigate("/blog-detail")}
            />
            <Button
              type="btn-simple-blue"
              text="Healthcare"
              onClick={() => navigate("/blog-detail")}
            />
            <Button
              type="btn-simple-blue"
              text="Treatment"
              onClick={() => navigate("/blog-detail")}
            />
            <Button
              type="btn-simple-blue"
              text="Medical"
              onClick={() => navigate("/blog-detail")}
            />
            <Button
              type="btn-simple-blue"
              text="Technology"
              onClick={() => navigate("/blog-detail")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSuggestions;
