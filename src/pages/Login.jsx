import React, { useContext, useState } from "react";
import "./Login.css";
import Header from "../components/Header";
import Register from "../components/Register";
import Singup from "../components/Singup";
import { productsContext } from "../context/ProductsContext";
import Singout from "../components/Singout";

function Login() {
  const { user, handleUser } = useContext(productsContext);
  const { verifyUserOn } = useContext(productsContext);

  verifyUserOn(user);

  return (
    <>
      <Header />
      {user ? <p>Bienvenido! {user}</p> : <p>No user...</p>}
      {!user ? (
        <>
          <h3>Registrate</h3>
          <Register />
          <h3>Inicia sesion</h3>
          <Singup />
        </>
      ) : (
        <>
          <h3>Wellcome!</h3>
          <Singout />
        </>
      )}
    </>
  );
}

export default Login;
