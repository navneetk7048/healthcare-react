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
    date: "",
  });

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, comment } = commentData;

    isRequired(name, "Name");
    isAlphabet(name, "Name");

    isRequired(email, "Email");
    isEmailFormat(email, "Email");

    isRequired(comment, "Comment");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      validate();

      let newDate = moment(Date.now()).format("MMM DD, YYYY @ HH:mm");

      setCommentData({
        ...commentData,
        date: newDate,
      });

      setComments([...comments, commentData]);

      setCommentData({
        id: uuid(),
        name: "",
        email: "",
        comment: "",
        date: "",
      });

      toast.success("Success");
    } catch (error) {
      toast.error(error);
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
