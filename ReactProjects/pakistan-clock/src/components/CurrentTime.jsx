import { useEffect, useState } from "react";


let CurrentTime = ()=>{


    let [netTime, setNetTime] = useState(new Date());

    useEffect(()=>{

        const interval= setInterval(()=>{
                setNetTime(new Date());
        },1000);

        return (()=>{clearInterval(interval);})

    }, []);

    return <p classNameName="lead">
        Current time is: {netTime.toLocaleDateString()}
        - {netTime.toLocaleTimeString() } </p>
}

export default CurrentTime;