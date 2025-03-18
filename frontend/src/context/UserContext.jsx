import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider ({children}) {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    async function login(email, password) {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if (data.token) {
                setToken(data.token);
                setEmail(data.email);
                localStorage.setItem("token", data.token);
            } else {
                console.error("Error en el Inicio de Sesión");
            }
        } catch (error) {
            console.error("Error en el Inicio de Sesión");
        }
    }

    async function register(email, password) {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if (data.token) {
                setToken(data.token);
                setEmail(data.email);
                localStorage.setItem("token", data.token);
            } else {
                console.error("Error en el registro.");
                alert("Error en el registro.");
            }
        } catch (error) {
            console.error("Error en el registro.");
            alert("Error en el registro.");
        }
    }

    function logout() {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
    }

    async function getProfile() {
        const token = localStorage.getItem("token");
        if (token) {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {"Authorization": `Bearer ${token}`}})
            const data = await response.json();
            const email = data.email;
            setEmail(email);
        } else {
            console.error("Error al cargar perfil.")
            alert("Error al cargar perfil.")};
    }

    return (
        <UserContext.Provider value={{token, email, login, register, logout, getProfile}}>
            {children}
        </UserContext.Provider>
    );
}