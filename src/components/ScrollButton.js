import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    scrolled > 1 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  window.addEventListener("scroll", toggleVisible);

  return (
    <FaAngleUp onClick={scrollToTop} className={`scroll-button ${visible}`} />
  );
};

export default ScrollButton;
