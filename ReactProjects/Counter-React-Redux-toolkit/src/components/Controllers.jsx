import { useDispatch } from "react-redux";
import { counterActions } from "../store";


const Controllers = () => {

    const dispatch= useDispatch();

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={()=>{
                dispatch(counterActions.increment());
            }} type="button" class="btn btn-success">Increase</button>
            <button  onClick={()=>dispatch(counterActions.decrement())} type="button" class="btn btn-primary">Decrease</button>

        </div>
    </>

}

export default Controllers;