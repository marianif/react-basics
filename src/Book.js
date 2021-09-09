import React from "react";

const Book = (props) => {
  const { image, title, author, description } = props;
  const clickHandler = () => {
    alert("button was clicked");
  };
  return (
    <div className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{description}</p>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default Book;
