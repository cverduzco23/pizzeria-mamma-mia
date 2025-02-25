import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <div className="profile-card">
        <img
          src="./assets/images/usuario.webp"
          alt="Usuario default"
          className="usuario-default"
        />
        <p>
          <strong>Email:</strong> usuario@example.com
        </p>
        <button className="logout-button">Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Profile;
