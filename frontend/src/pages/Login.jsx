import { useState } from "react";
import "../styles/login.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { token, login } = useContext(UserContext);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    var email = formData.email;
    var password = formData.password;

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    } else {
      login(formData.email, formData.password);
      if (token) {
        setError(null)
      } else {
        setError("Error en el inicio de sesión. Verifique sus credenciales.");
      }
    }
  }

  let errorMessage = null;

  if (error) {
    errorMessage = <p className="error">{error}</p>;
  }

  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
