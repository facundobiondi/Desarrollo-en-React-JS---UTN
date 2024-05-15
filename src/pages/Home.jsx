import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import SortRate from "../components/SortRate";
import HomeC from "../components/HomeC";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  const { products, isLoading, error } = useContext(productsContext);

  return (
    <>
      <Header />
      <h2> Productos destacados </h2>
      <SortRate />
      <main>
        {products.map((prod) => (
          <HomeC prod={prod} key={prod.id} />
        ))}
      </main>
    </>
  );
}

export default Home;
