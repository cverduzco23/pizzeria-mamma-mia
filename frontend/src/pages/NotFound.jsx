import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img
        src="./assets/images/pizza404.png"
        alt="Pizza llorando"
        className="not-found-img"
      />
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="not-found-link">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
