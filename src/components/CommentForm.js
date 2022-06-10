// Packages
import { useState } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { toast } from "react-toastify";

// Components
import { ButtonSlide } from "../components/Button";

// Functions
import { isAlphabet, isEmailFormat, isRequired } from "../validations";

const CommentForm = ({ comments, setComments }) => {
  const [commentData, setCommentData] = useState({
    id: uuid(),
    name: "",
    email: "",
    comment: "",
    date: moment().format("MMM DD, YYYY @ HH:mm"),
  });

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, comment } = commentData;

    try {
      isRequired(name, "Name");
      isAlphabet(name, "Name");

      isRequired(email, "Email");
      isEmailFormat(email, "Email");

      isRequired(comment, "Comment");

      return true;
    } catch (error) {
      toast.warning(error.toString().replace("Error: ", ""));
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setComments([...comments, commentData]);

      setCommentData({
        id: uuid(),
        name: "",
        email: "",
        comment: "",
        date: moment().format("MMM DD, YYYY @ HH:mm"),
      });
    }
  };

  return (
    <form
      className="blog-comments-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2>Add Comment</h2>
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={commentData.name}
      />
      <input
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={commentData.email}
      />
      <textarea
        name="comment"
        placeholder="Your Message"
        onChange={handleChange}
        value={commentData.comment}
      />
      <ButtonSlide variant="tartOrange-policeBlue">Submit Now</ButtonSlide>
    </form>
  );
};

export default CommentForm;
