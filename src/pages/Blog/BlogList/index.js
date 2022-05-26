import BlogItem from "./BlogItem";
import BlogSpecialItem from "./BlogSpecialItem";
import Button from "../../../components/Button";
import { blogs } from "./blogs";

const BlogList = () => {
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
          <Button
            type="btn-simple-blue"
            text="Prev"
            onClick={() => window.scroll(0, 0)}
          />
          <Button
            type="btn-simple-blue active"
            text="1"
            onClick={() => window.scroll(0, 0)}
          />
          <Button
            type="btn-simple-blue"
            text="2"
            onClick={() => window.scroll(0, 0)}
          />
          <Button
            type="btn-simple-blue"
            text="3"
            onClick={() => window.scroll(0, 0)}
          />
          <Button
            type="btn-simple-blue"
            text="Next"
            onClick={() => window.scroll(0, 0)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogList;