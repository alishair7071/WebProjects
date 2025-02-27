
import { useContext } from 'react';
import ToDoItem from './ToDoItem'
import { ToDoItemsContext } from '../store/todo_items_store';


const ToDoItemContainer = () => {


    const toDoItemsFromContextObj= useContext(ToDoItemsContext);
    const ItemsCount = toDoItemsFromContextObj.ItemsCount;
    const deleteItem = toDoItemsFromContextObj.deleteItem;


    return <div classNameName='items-container'>

        {ItemsCount.map((currentItem) => {
            return <ToDoItem deleteItem={deleteItem} toDoName={currentItem.Name} toDoDate={currentItem.DueDate}></ToDoItem>
        })}
    </div>
}

export default ToDoItemContainer;