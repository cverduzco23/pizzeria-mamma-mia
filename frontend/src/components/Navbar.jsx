import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

function Navbar() {
  const { total } = useContext(CartContext);
  const { token, logOut } = useContext(UserContext);

  function setActiveClass({ isActive }) {
    return isActive ? "active" : undefined;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">
          🍕 Pizzería Mamma Mía!
        </Link>
        <div className="nav-links">
          { token ? null : (
            <NavLink className={setActiveClass} to="/register" data-icon="📝">
              Registro
            </NavLink>
          )}

          { token ? null : (
            <NavLink className={setActiveClass} to="/login" data-icon="🔑">
              Login
            </NavLink>
          )}

          { token ? (
            <NavLink className={setActiveClass} to="/profile" data-icon="👤">
              Mi Perfil
            </NavLink>
          ) : null}

          { token ? (
            <button data-icon="🔓" onClick={logOut}>
              Cerrar Sesión
            </button>
          ) : null}

          <Link to="/cart" data-icon="🛒">
            Total: $ {total}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
