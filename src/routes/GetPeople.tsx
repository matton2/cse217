import React, {useEffect} from "react";
import { useData } from "../context/DataContext";
import { useUserContext } from "../context/UserContext";

const GetPeople: React.FC = () => {

    const {dataState, dataDispatch} = useData()  
    const {getUser} = useUserContext()
    
    
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=5&inc=name,gender,email`)
        .then((res) => res.json())
        .then((data) => {
            dataDispatch({
                type: 'fetchData',
                payload: {data: data.results}
            })
        })
    }, [])

    return(
        <div style={{padding:'20px'}}> 
            <h1> Data Page!</h1>
            <p>{JSON.stringify(dataState.people)}</p>
        </div>

    )


}

export default GetPeople