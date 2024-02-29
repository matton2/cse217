import React, {ReactNode, createContext, useContext, useState} from "react";

type UserContextProps = {
    children: ReactNode
}


type UserContextType = {
    assignUser: (value:string) => void
    getUser: () => string
}

const UserContext = createContext({} as UserContextType)

export function useUserContext() {
    return useContext(UserContext)
}

export function UserProvider({children}: UserContextProps) {
    const [user, setUser] = useState('')

    const assignUser = (value:string) => setUser(value)

    const getUser = () => {return user}

    return(
        <UserContext.Provider
        value={{assignUser, getUser}}>
            {children}
        </UserContext.Provider>
    )

}