import "../styles/Profile.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {

  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  function logOutFunc () {
    logOut();
    navigate("/");
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Perfil de Usuario</h2>
        <img
          src="./assets/images/usuario.webp"
          alt="Usuario default"
          className="usuario-default"
        />
        <p>
          <strong>Email:</strong> cesar.v@myemail.com
        </p>
        <button className="logout-button" onClick={logOutFunc}>Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Profile;
