import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books-list.js";
import Book from "./Book.js";
// -------------- Event Handler -----------//

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

const root = document.getElementById("root");

ReactDOM.render(<Booklist />, root);
