import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider ({children}) {
    const [token, setToken] = useState(true);

    function logOut() {
        setToken(false);
    }

    return (
        <UserContext.Provider value={{token, logOut}}>
            {children}
        </UserContext.Provider>
    );
}