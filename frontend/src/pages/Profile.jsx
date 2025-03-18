import "../styles/profile.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

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
    <div className="profile-container">
      {modal}
      <div className="profile-card">
        <h2>Perfil de Usuario</h2>
        <img
          src="./assets/images/usuario.webp"
          alt="Usuario default"
          className="usuario-default"
        />
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button className="logout-button" onClick={function() {setShowModal(true)}}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;
