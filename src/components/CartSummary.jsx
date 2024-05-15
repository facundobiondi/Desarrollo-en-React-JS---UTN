import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "../utils/getTotalCart";
import "./CartSummary.css";

function CartSummary() {
  const { cart } = useContext(productsContext);
  return cart?.length ? (
    <>
      <div className="cartNotEmpty">
        <Link to="/cart">
          <span>
            <MdShoppingCart size={30} />
            <p>{cart.length}</p>
          </span>
        </Link>
        ${getTotalCartPrice(cart)}
      </div>
    </>
  ) : (
    <>
      <div className="cartEmpty">
        <MdShoppingCart size={30} color="black" />
        <p> {cart.length}</p>
      </div>
    </>
  );
}

export default CartSummary;
