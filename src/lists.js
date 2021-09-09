import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Setup

const books = [
  {
    id: 1,
    author: "Douglas R. Hofstadter",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41D+2N5s2AL._SY344_BO1,204,203,200_.jpg",
    title: "Godel, Escher, Bach",
    description:
      "Un eterna ghirlanda brillante. Una fuga metaforica su menti e macchine nello spirito di Lewis Carroll",
  },
  {
    id: 2,
    author: "Umberto Eco",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41UXsRlZIRL._SX343_BO1,204,203,200_.jpg",
    title: "Il pendolo di Foucault",
    description:
      " Questo romanzo si svolge dall'inizio degli anni sessanta al 1984 tra una casa editrice milanese e un museo parigino dove è esposto il pendolo di Foucault.",
  },
  {
    id: 3,
    author: "Douglas R. Hofstadter",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41D+2N5s2AL._SY344_BO1,204,203,200_.jpg",
    title: "Godel, Escher, Bach",
    description:
      "Un eterna ghirlanda brillante. Una fuga metaforica su menti e macchine nello spirito di Lewis Carroll",
  },
];

const book = books.map((book) => {
  return <h1>{book}</h1>;
});

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((info) => {
        return <Book key={info.id} {...info}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { image, title, author, description } = props;
  return (
    <div className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{description}</p>
    </div>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<Booklist />, root);
