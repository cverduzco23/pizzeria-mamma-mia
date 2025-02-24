import PropTypes from "prop-types";

const Navbar = ({ toggleCart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand">
          🍕 ¡Pizzería Mamma Mía!
        </a>
        <button className="nav-button cart" onClick={toggleCart}>
          🛒 Carrito
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Navbar;
