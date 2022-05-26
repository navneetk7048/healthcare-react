import BlogItem from "./BlogItem";
import { blogs } from "./blogs";

const BlogList = () => {
  return (
    <div className="blog-list container">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blogDetails={blog} />
      ))}
    </div>
  );
};

export default BlogList;
