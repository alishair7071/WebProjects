import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo_items_store";


const WelcomeMessage=()=>{

    const toDoItemsFromContextObj= useContext(ToDoItemsContext);
    const ItemsCount = toDoItemsFromContextObj.ItemsCount;


    return <> {ItemsCount.length==0 ? <p>Enjoy Your Day</p> : <h1></h1>}
    
    </>
}

export default WelcomeMessage;