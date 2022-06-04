import { FaRegQuestionCircle } from "react-icons/fa";

const Note = ({ children }) => {
  return (
    <div className="note">
      <FaRegQuestionCircle />
      <p>{children}</p>
    </div>
  );
};

export default Note;
