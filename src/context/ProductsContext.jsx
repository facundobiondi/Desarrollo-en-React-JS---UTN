import React, { useState, useEffect, createContext } from "react";
import { getAllProducts } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
export const productsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedMaxtoMin, setSortedMaxToMin] = useState(false);
  const [sortedRate, setSortedRate] = useState(false);
  const [user, setUser] = useState(null);

  const addToCart = (prod) => {
    setCart((prevValue) => [...prevValue, prod]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleSort = () => {
    if (sortedMaxtoMin) {
      const sortedProducts = products.toSorted((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else {
      const sortedProducts = products.toSorted((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    setSortedMaxToMin(!sortedMaxtoMin);
  };

  const verifyUserOn = () => {
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user.email);
      });
    });
  };

  const handleUser = (user) => setUser(user);

  const handleRate = () => {
    if (sortedMaxtoMin) {
      const sortedProducts = products.toSorted(
        (a, b) => a.rating.rate - b.rating.rate
      );
      setProducts(sortedProducts);
    } else {
      const sortedProducts = products.toSorted(
        (a, b) => b.rating.rate - a.rating.rate
      );
      setProducts(sortedProducts);
    }
    setSortedMaxToMin(!sortedMaxtoMin);
  };

  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.messge);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <productsContext.Provider
      value={{
        products,
        isLoading,
        error,
        sortedMaxtoMin,
        sortedRate,
        user,
        cart,
        handleSort,
        handleRate,
        handleUser,
        verifyUserOn,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
