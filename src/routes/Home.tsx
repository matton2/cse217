import { Button } from "antd"
import React, {useState, useEffect} from "react"

const Home: React.FC = () => {

    const [stateOnLoad, setStateOnLoad] = useState<string>()
    const [clicks, setClicks] = useState<number>(0)
    const [evenOdd, setEvenOdd] = useState<string>()

    useEffect(() => {
        setStateOnLoad('hello, this ran on load and will not run again')
    }, [])

    useEffect(() => {

        clicks % 2 === 0 ? setEvenOdd('even'):setEvenOdd('odd')
    
    }, [clicks])

    return(
        <div style={{padding:'20px'}}> 
            <h1> Home Page!</h1>
            <h2>{stateOnLoad}</h2>
            <Button onClick={() => setClicks(clicks+1)}>Update the number</Button>
            <h3>{clicks}</h3>
            {clicks > 3 && <div>{evenOdd} (Runs once the clicks number gets above 3 but gets set every time clicks changes) </div>}
            {clicks > 25 && <h1>This number is too big!! (only displays above 25 clicks)</h1>}
        </div>

    )
}

export default Home