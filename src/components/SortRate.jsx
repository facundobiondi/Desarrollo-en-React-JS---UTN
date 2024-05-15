import React from "react";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";

function SortRate() {
  const { sortedRate, handleRate } = useContext(productsContext);

  return (
    <section>
      {sortedRate ? (
        <FaSortAmountUp onClick={handleRate}>
          <p> Order by </p>
        </FaSortAmountUp>
      ) : (
        <FaSortAmountDownAlt
          style={{ fontSize: "1.5rem", cursor: "pointer", float: "left" }}
          onClick={handleRate}
        >
          <p> Order by </p>
        </FaSortAmountDownAlt>
      )}
    </section>
  );
}

export default SortRate;
