import { Link } from "react-router-dom";
import posts from "./posts";

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map(({ id, picture, title, date }) => (
        <div className="post" key={id}>
          <div className="post-picture">
            <img src={picture} alt="" />
          </div>
          <div className="post-content">
            <h3>
              <Link to="/">{title}</Link>
            </h3>
            <p>{date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
