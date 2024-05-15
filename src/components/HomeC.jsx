import React from "react";
import "./HomeC.css";
import SortRate from "../components/SortRate";

function HomeC({ prod }) {
  return (
    <div className="home" prod={prod.key}>
      <div>
        <h3 className="title">{prod.title}</h3>
        <div>
          <img src={prod.image} alt={prod.title} />
        </div>
      </div>
      <div className="priceRepu">
        <p className="price">
          Price: $ {prod.price} Reputacion {prod.rating.rate}
        </p>
      </div>
    </div>
  );
}

export default HomeC;
