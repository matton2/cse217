
import React, { ReactNode, createContext, useReducer, useContext } from "react";

//set the type for the props, allows you to pass children into it
type DataProviderProps = {
    children: ReactNode
}

// type for the data that is coming back from the fake API
type DataType = {
    gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
}

// this is the state of the current reducer, this can have more than one thing in it
type DataStateProps = {
    people: DataType[]
}

// this the type of actions of the reducer can do, this can also have more things in it
type dataActions = 
    | {type: 'fetchData'; payload: {data: DataType[]}}

// the initial state of the reducer, contains an empty array of people (matching the DataStateProps)
const initialState: DataStateProps = {
    people: []
}

// this is where we create our context and reducer.  It takes a State (dataState) and Dispatch function
const DataContext = createContext<{
    dataState: DataStateProps
    dataDispatch: React.Dispatch<any>
}>({
    // the dataState here is set to the intial state
    dataState: initialState,
    dataDispatch: () => null
})

// reducer action time: this takes in a state (all of our DataState) and the actions (dataActions)
// in this example we only have one action but there could be a bunch more
const dataReducer = (state: DataStateProps, action: dataActions): DataStateProps => {

    switch (action.type) {
        case 'fetchData': {
            // when we fetch data, we will return whatever else is in the state (...state) as well as assign the 
            // paylow to the people variable
            return{...state, people: action.payload.data}
        }

        default:
            // if we dont feed it any action type, just return the state
            return{...state}
    }
}

// This is the provide that will handle the dataState and Dispatch calls
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

// finally we need to export the useData so we can get access to all the context items
export function useData() {
    return useContext(DataContext)
}

