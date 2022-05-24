import Banner from "../../components/Banner";
import blogBanner from "../../assets/images/blog-banner.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <Banner
        banner={blogBanner}
        previous="Home"
        current="Blog"
        title="From Our Blog"
      />
    </div>
  );
};

export default Blog;
