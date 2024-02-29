import React, {ReactNode, createContext, useContext, useState} from "react";

//set the type for the props, allows you to pass children into it
type UserContextProps = {
    children: ReactNode
}

// this sets up the functions you are going to have in this context, what the inputs and outputs are
type UserContextType = {
    assignUser: (value:string) => void
    getUser: () => string
}

// creates a simple context based on the types above
const UserContext = createContext({} as UserContextType)

// export the context so we can get access to it
export function useUserContext() {
    return useContext(UserContext)
}

// the provider provides access to the funtions and variables in the Context using the useState functions
// in this example, we are saving one variable and 2 functions and then exporting them
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