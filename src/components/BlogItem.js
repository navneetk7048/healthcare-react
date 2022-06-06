import { Link } from "react-router-dom";

const BlogItem = ({ blogDetails }) => {
  const { picture, date, title, text } = blogDetails;

  return (
    <div className="blog-item">
      {picture ? <img src={picture} alt="" /> : null}
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h2 className="blog-title">
          <Link to="/blog/blog-detail">{title}</Link>
        </h2>
        <p className="blog-text">{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;