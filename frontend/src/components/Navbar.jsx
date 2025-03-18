import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useState } from "react";

function Navbar() {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  function setActiveClass({ isActive }) {
    return isActive ? "active" : undefined;
  }

  function logOutFunc() {
    logout();
    setShowModal(false);
    navigate("/");
  }

  function closeModal() {
    setShowModal(false);
  }

  const modal = (
    <div className={showModal ? "modal-overlay" : "modal-hidden"}>
      <div className="modal-container">
        <h3>¿Cerrar sesión?</h3>
        <p>Estás a punto de cerrar sesión. ¿Seguro que quieres salir?</p>
        <div className="modal-buttons">
          <button className="btn-confirm" onClick={logOutFunc}>Sí, cerrar sesión</button>
          <button className="btn-cancel" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {modal}
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
            <button data-icon="🔓" onClick={function(){setShowModal(true)}}>
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
