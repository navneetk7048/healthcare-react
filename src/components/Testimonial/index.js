import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  const { comment, name, type } = testimonial;

  return (
    <div className={`testimonial-component ${type}`}>
      <FaQuoteLeft />
      <div className="comment">
        <p>{comment}</p>
        <p>
          <span>{name}</span> - Satisfied Patient
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
