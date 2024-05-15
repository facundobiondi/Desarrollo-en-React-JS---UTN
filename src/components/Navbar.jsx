import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
        className={"navbarHome"}
      >
        Home
      </NavLink>

      <NavLink
        to={"/products"}
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
        className={"navbarProductos"}
      >
        Productos
      </NavLink>

      <NavLink
        to={"/login"}
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
        className={"navbarLogin"}
      >
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;
