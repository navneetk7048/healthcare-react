import { scrollToTop } from "../Functions";
import BlogItem from "./BlogItem";
import BlogSpecialItem from "./BlogSpecialItem";
import { ButtonSpecial } from "./Button";

const BlogList = ({ blogs }) => {
  const blogItemList = [];
  let i = 0;

  while (i < blogs.length) {
    blogItemList.push(
      <div className="blog-item-list">
        {blogs[i].type === "regular" ? (
          <BlogItem blogDetails={blogs[i]} key={blogs[i].id} />
        ) : (
          <BlogSpecialItem blogDetails={blogs[i]} key={blogs[i].id} />
        )}
        {blogs[i + 1].type === "regular" ? (
          <BlogItem blogDetails={blogs[i + 1]} key={blogs[i + 1].id} />
        ) : (
          <BlogSpecialItem blogDetails={blogs[i + 1]} key={blogs[i + 1].id} />
        )}
        {blogs[i + 2].type === "regular" ? (
          <BlogItem blogDetails={blogs[i + 2]} key={blogs[i + 2].id} />
        ) : (
          <BlogSpecialItem blogDetails={blogs[i + 2]} key={blogs[i + 2].id} />
        )}
      </div>
    );

    i += 3;
  }

  return (
    <div className="blog-list">
      <div className="container">
        {blogItemList}
        <div className="blog-buttons">
          <ButtonSpecial variant="simple-tiffanyBlue" onClick={scrollToTop}>
            Prev
          </ButtonSpecial>
          <ButtonSpecial variant="simple-tiffanyBlue" onClick={scrollToTop}>
            1
          </ButtonSpecial>
          <ButtonSpecial variant="simple-tiffanyBlue" onClick={scrollToTop}>
            2
          </ButtonSpecial>
          <ButtonSpecial variant="simple-tiffanyBlue" onClick={scrollToTop}>
            3
          </ButtonSpecial>
          <ButtonSpecial variant="simple-tiffanyBlue" onClick={scrollToTop}>
            Next
          </ButtonSpecial>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
