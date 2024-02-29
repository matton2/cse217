import React from "react";
import { Input } from "antd";
import { useUserContext } from "../context/UserContext";


const UserPage: React.FC = () => {

    const {assignUser, getUser} = useUserContext()    

    return(
        <div style={{padding:'20px'}}> 
            <h1> User Page!</h1>
            <Input onChange={(e) => assignUser(e.target.value)} value={getUser()}/>
        </div>

    )


}

export default UserPage