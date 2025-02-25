import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand">🍕 Pizzería Mamma Mía!</Link>
        <div className="nav-links">
          <Link to="/register" data-icon="📝">Registro</Link>
          <Link to="/login" data-icon="🔑">Login</Link>
          <Link to="/profile" data-icon="👤">Perfil</Link>
          <Link to="/cart" data-icon="🛒">Total: $xxx</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


