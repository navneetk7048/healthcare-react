import Avatar from "react-avatar";
import { scrollToTop } from "../Functions";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h2>{comments.length} Comments</h2>
      <div className="blog-comments-list">
        {comments.map((comment) => (
          <div className="blog-comments-item" key={comment.id}>
            <Avatar name={comment.name} round size="50" />
            <div className="blog-comments-text">
              <p className="name">{comment.name}</p>
              <p>
                {comment.date} / <span onClick={scrollToTop}>Reply</span>
              </p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
