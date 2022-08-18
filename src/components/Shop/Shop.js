import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
const Shop = (props) => {
  const { book, handelAddToBook } = props;
  const { name, balance, picture } = book;

  return (
    <div className="product">
      <img src={picture} alt="" />
      <div className="product-info">
        <p className="product-name">Name :{name}</p>
        <p>Price :${balance}</p>
      </div>
      <button className="btn-cart">
        <p onClick={() => handelAddToBook(book)}>
          Add to book <FontAwesomeIcon icon={faShoppingCart} />
        </p>
      </button>
    </div>
  );
};

export default Shop;
