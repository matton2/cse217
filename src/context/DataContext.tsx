
import React, { ReactNode, createContext, useReducer, useContext } from "react";

type DataProviderProps = {
    children: ReactNode
}

type DataType = {
    gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
}

type DataStateProps = {
    people: DataType[]
}

type dataActions = 
    | {type: 'fetchData'; payload: {data: DataType[]}}

const initialState: DataStateProps = {
    people: []
}

const DataContext = createContext<{
    dataState: DataStateProps
    dataDispatch: React.Dispatch<any>
}>({
    dataState: initialState,
    dataDispatch: () => null
})

const dataReducer = (state: DataStateProps, action: dataActions): DataStateProps => {

    switch (action.type) {
        case 'fetchData': {
            return{...state, people: action.payload.data}
        }

        default:
            return{...state}
    }
}

export function DataProvider({children}: DataProviderProps) {
    const [dataState, dataDispatch] = useReducer(
        dataReducer,
        initialState
    )

    return (
        <DataContext.Provider value={{ dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext)
}

