import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider ({children}) {
    const [token, setToken] = useState(true);

    function logOut() {
        setToken(false);
    }

    function logIn () {
        setToken(true);
    }

    return (
        <UserContext.Provider value={{token, logOut, logIn}}>
            {children}
        </UserContext.Provider>
    );
}