import Button from "./Button";

const SearchBox = ({ title, text, placeholder }) => {
  return (
    <div className="search-box">
      <div className="directions">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="input">
        <input type="text" placeholder={placeholder} />
        <Button type="btn-pink-darkblue">Search</Button>
      </div>
    </div>
  );
};

export default SearchBox;
