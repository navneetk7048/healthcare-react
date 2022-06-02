import { FaRegQuestionCircle } from "react-icons/fa";

const Note = ({ text }) => {
  return (
    <div className="note">
      <FaRegQuestionCircle />
      <p>{text}</p>
    </div>
  );
};

export default Note;
