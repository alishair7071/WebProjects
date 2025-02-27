import { useDispatch } from "react-redux";


const Controllers = () => {

    const dispatch= useDispatch();

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={()=>dispatch({type: "INCREMENT"})} type="button" class="btn btn-success">Increase</button>
            <button  onClick={()=>dispatch({type: "DECREMENT"})} type="button" class="btn btn-primary">Decrease</button>

        </div>
    </>

}

export default Controllers;