const Navbar = () => {
  const token = false;
  const total = 25000;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand">🍕 ¡Pizzería Mamma Mía!</a>
        <div className="nav-links">
          <button className="nav-button">🍕Home</button>
          {token ? (
            <>
              <button className="nav-button">🔒Profile</button>
              <button className="nav-button logout">🔒Logout</button>
            </>
          ) : (
            <>
              <button className="nav-button login">🔐Login</button>
              <button className="nav-button register">🔐Register</button>
            </>
          )}
          <button className="nav-button cart">🛒Total: ${total.toLocaleString()}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

