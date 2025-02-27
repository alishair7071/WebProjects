import { useSelector } from "react-redux";


const DisplayCounter = ()=>{

    let {counterVal}= useSelector((store) => store.counter);

    return (
        <p className="lead mb-4">Counter Value: {counterVal}</p>

    );
}

export default DisplayCounter;