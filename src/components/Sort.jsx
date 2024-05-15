import React from "react";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";

function Sort() {
  const { sortedMaxtoMin, handleSort } = useContext(productsContext);

  return (
    <section style={{ float: "left" }}>
      {sortedMaxtoMin ? (
        <BsSortNumericDown
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={handleSort}
        />
      ) : (
        <BsSortNumericDownAlt
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={handleSort}
        />
      )}
    </section>
  );
}

export default Sort;
