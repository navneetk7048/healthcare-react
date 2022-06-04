import { Link } from "react-router-dom";

const BlogSpecialItem = ({ blogDetails }) => {
  const { logo, title, text, type } = blogDetails;

  return (
    <div className={`blog-special-item ${type}`}>
      {logo}
      <h2 className="blog-title">{title}</h2>
      <p className="blog-text">
        {type === "special-blue" ? text : <Link to="/">{text}</Link>}
      </p>
    </div>
  );
};

export default BlogSpecialItem;
