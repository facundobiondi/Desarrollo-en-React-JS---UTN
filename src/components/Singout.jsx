import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { auth } from "../services/firebase";

function Singout() {
  const { user, handleUser } = useContext(productsContext);
  const singOut = () => {
    auth
      .signOut()
      .then(() => {
        handleUser(null);
      })
      .catch();
  };

  return <button onClick={singOut}> Singout </button>;
}

export default Singout;
