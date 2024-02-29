import React from "react"
import { useUserContext } from "../context/UserContext";
import { useData } from "../context/DataContext"


const About: React.FC = () => {

    const {getUser} = useUserContext()    
    const {dataState} = useData()


    return(
        <div style={{padding:'20px'}}>
            <h1> About Page!</h1>
            <h3>User logged in: {getUser()}</h3>

            <br/>
            <p>{JSON.stringify(dataState.people)}</p>
        </div>
    )
}

export default About