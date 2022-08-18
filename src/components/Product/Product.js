import React, { useState } from "react";
import Book from "../Book/Book";
import Shop from "../Shop/Shop";
import "./Product.css";
const Product = () => {
  const [book, setBook] = useState([]);
  const books = [
    {
      id: "62fcedbef8a2e9d85717550f",
      balance: 120,
      picture:
        "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
      name: "Shesher kabita",
    },
    {
      id: "62fcedbe9679f44ff9f3e942",
      balance: 135,
      picture:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
      name: "Pather pancile",
    },
    {
      id: "62fcedbe5cb10ed104d62cb1",
      balance: 202,
      picture:
        "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Chander pahar",
    },
    {
      id: "62fcedbe8b497a0c1af0f7b5",
      balance: 213,
      picture:
        "https://assets.entrepreneur.com/content/3x2/2000/20150115183825-books-reading.jpeg?auto=webp&quality=95&crop=16:9&width=675",
      name: "Thakumar jule",
    },
    {
      id: "62fcedbe0714c744083c7d91",
      balance: 217,
      picture:
        "https://economictimes.indiatimes.com/thumb/msid-80119417,width-1200,height-900,resizemode-4,imgsize-288694/books-getty.jpg?from=mdr",
      name: "Chokher bali",
    },
    {
      id: "62fcedbe114ce111741ed226",
      balance: 329,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pGMGObdzjRkJIrW9Ojw_8Ma--6Xwt01nNg&usqp=CAU",
      name: "East-west",
    },
    {
      id: "62fcedbe3d02fb6e4978ce6c",
      balance: 132,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRZAv9QWTG3yJraTbDZ4UEvv-LLSz7GbLsA&usqp=CAU",
      name: "Nodito noroke",
    },
    {
      id: "62fcedbe3d02fb6e4978ce6c",
      balance: 132,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysFQmdYBzzpcDxxFyg8DhYibmvx69xYBu_w&usqp=CAU",
      name: "Kalbela",
    },
    {
      id: "62fcedbe3d02fb6e4978ce6c",
      balance: 132,
      picture:
        "https://cdn.britannica.com/90/181390-050-7F612EA6/Human-skull-book-witchcraft-sorcery-eternity-bone.jpg",
      name: "Lalsalu",
    },
    {
      id: "62fcedbe3d02fb6e4978ce6c",
      balance: 132,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6oDbci6sn4yYDEtmlQGqLCUU6d1pVu6fBg&usqp=CAU",
      name: "First Light",
    },
  ];
  const handelAddToBook = (books) => {
    // console.log(books);
    const newBook = [...book, books];
    setBook(newBook);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {books.map((book) => (
          <Shop
            key={book.name}
            book={book}
            handelAddToBook={handelAddToBook}></Shop>
        ))}
      </div>
      <div className="cart-container">
        <div className="cart">
          <Book books={book}></Book>
        </div>
      </div>
    </div>
  );
};

export default Product;
