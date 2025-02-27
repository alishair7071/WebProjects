import { useRef } from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function ToDo({handleNewItem}) {


    const toDoNameRef= useRef();
    const dueDateRef= useRef();



    return  <div className="container text-center">
    <div className="row kg-row">
        <div className="col-6">
            <input type="text" placeholder='Enter to do here' ref={toDoNameRef}/>
        </div>
        <div className="col-4">
            <input type="date" ref={dueDateRef}/>
        </div>
        <div className="col-2" >
            <button
            onClick={()=>{
                const ToDoName= toDoNameRef.current.value;
                const dueDate= dueDateRef.current.value;
                handleNewItem(ToDoName, dueDate);
                toDoNameRef.current.value= "";
                dueDateRef.current.value="";
            }}
             style={{float: "left"}} className="btn btn-success"><IoMdAdd /></button>
        </div>
    </div>
    </div>
}

export default ToDo;