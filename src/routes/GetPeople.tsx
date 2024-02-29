import React, {useEffect} from "react";
import { useData } from "../context/DataContext";
import { Input } from "antd";

const GetPeople: React.FC = () => {

    const {dataState, dataDispatch} = useData()  
    
    
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${dataState.howMany}&inc=name,gender,email`)
        .then((res) => res.json())
        .then((data) => {
            dataDispatch({
                type: 'fetchData',
                payload: {data: data.results}
            })
        })
    }, [dataState.howMany])

    return(
        <div style={{padding:'20px'}}> 
            <h1> Data Page!</h1>
            <Input onChange={(e) => dataDispatch({type: 'updateHowMany', payload:{count: e.target.value}})} value={dataState.howMany} />
            <p>{JSON.stringify(dataState.people)}</p>
        </div>

    )


}

export default GetPeople