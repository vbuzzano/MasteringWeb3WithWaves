import React, { createContext, useState } from "react"

const UserContext = createContext({})

/*const UserContextProvider = ({ children }) => {

    const [ user, setUser ] = useState( UserContext );

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
*/
export { UserContext }
