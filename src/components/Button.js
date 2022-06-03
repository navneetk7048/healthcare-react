const Button = ({ type, onClick, children }) => (
  <button className={"btn " + type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
