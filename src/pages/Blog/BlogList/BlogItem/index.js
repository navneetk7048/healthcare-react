const BlogItem = ({ blogDetails }) => {
  const { picture, date, title, text } = blogDetails;

  return (
    <div className="blog-item">
      <img src={picture} alt="" />
      <p className="blog-date">{date}</p>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-text">{text}</p>
    </div>
  );
};

export default BlogItem;
