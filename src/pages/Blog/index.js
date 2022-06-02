import Banner from "../../components/Banner";
import blogBanner from "../../images/blog-banner.jpg";
import BlogList from "./BlogList";
import BlogSuggestions from "./BlogSuggestions";

const Blog = () => {
  return (
    <div className="blog">
      <Banner
        banner={blogBanner}
        previous={[{ text: "Home", link: "" }]}
        current="Blog"
        title="From Our Blog"
      />
      <BlogList />
      <BlogSuggestions />
    </div>
  );
};

export default Blog;
