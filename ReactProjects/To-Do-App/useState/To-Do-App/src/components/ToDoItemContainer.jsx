
import ToDoItem from './ToDoItem'


const ToDoItemContainer = ({ ItemsArgu, deleteItem}) => {

    console.log(ItemsArgu);
    return <div classNameName='items-container'>

        {ItemsArgu.map((currentItem) => {
            return <ToDoItem deleteItem={deleteItem} toDoName={currentItem.Name} toDoDate={currentItem.DueDate}></ToDoItem>
        })}
    </div>
}

export default ToDoItemContainer;