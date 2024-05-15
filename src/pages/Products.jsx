import "./Products.css";
import Product from "../components/Product";
import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import Sort from "../components/Sort";
import Header from "../components/Header";
import CartSummary from "../components/CartSummary";

function Products() {
  const { products, isLoading, error, sortedMaxtoMin, handleSort } =
    useContext(productsContext);

  return (
    <>
      <Header />
      <div className="productsTile">
        <h2>Listado de productos</h2>
      </div>
      <Sort />
      <CartSummary />

      <main className="container">
        {products.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </main>
    </>
  );
}

export default Products;
