import React, { useState } from "react";
import "./Book.css";
const Book = ({ books }) => {
  //   console.log(books);
  //   const { books } = props.books;
  const [agin, setAgin] = useState([]);
  let name = 0;
  for (const book of books) {
    name = name + ", " + book.name;
  }
  const chooseAgain = (book) => {
    console.log(book);
  };
  return (
    <div>
      <div className="cart">
        <h2>Choose Your Book</h2>
        <p>book {books.length}</p>
        <li>Name :{name}</li>
      </div>
      <button className="choose-btn">
        <p onClick={chooseAgain}>CHOOSE AGAIN</p>
      </button>
    </div>
  );
};

export default Book;
