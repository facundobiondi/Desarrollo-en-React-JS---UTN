import React, { useContext } from "react";
import { card, cardInnerContainer } from "../styles/cardStyles";
import "./Product.css";
import { productsContext } from "../context/ProductsContext";

function Product({ prod }) {
  const { addToCart } = useContext(productsContext);

  return (
    <div className="productList" key={prod.key} style={card}>
      <h3 className="productTitle">{prod.title}</h3>
      <div style={cardInnerContainer}>
        <img src={prod.image} alt={prod.title} />
        <p className="productPrice">
          $ {prod.price} Rate: {prod.rating.rate}
        </p>
      </div>
      <div>
        <button onClick={() => addToCart(prod)}>shop</button>
      </div>
      <p className="productDescrip">{prod.description.slice(0, 60)}...</p>
    </div>
  );
}

export default Product;
