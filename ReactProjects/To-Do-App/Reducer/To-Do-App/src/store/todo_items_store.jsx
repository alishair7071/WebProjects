
import { createContext } from "react";
import { useReducer } from 'react'


export const ToDoItemsContext = createContext([]);




const toDoItemsReducer = (currToDoItems, action) => {

    let newToDoItems = currToDoItems;
  
    if (action.type == "NEW_ITEM") {
      newToDoItems = [
        ...currToDoItems, {
          Name: action.playload.Name,
          DueDate: action.playload.DueDate
        }
      ];
    }
    else if (action.type == "DELETE_ITEM") {
       newToDoItems = currToDoItems.filter(
        item => item.Name != action.playload.ItemName);
  
    }  
    return newToDoItems;
  }

 const ToDoItemsContextProvider=({children})=>{
    const [ItemsCount, dispatchToDoItems] = useReducer(toDoItemsReducer, []);

    const addNewItem = (Name, DueDate) => {
      const newItemAction = {
        type: "NEW_ITEM",
        playload: {
          Name,
          DueDate
        }
      }
      dispatchToDoItems(newItemAction);
    }
  
    const deleteItem = (deletedItemName) => {
      const deleteItemAction= {
        type: "DELETE_ITEM",
        playload: {
          ItemName: deletedItemName
        }
      }
      dispatchToDoItems(deleteItemAction);
    }

    return <ToDoItemsContext value={
        {
          ItemsCount: ItemsCount,
          addNewItem: addNewItem,
          deleteItem: deleteItem
        }}>
            {children}
        </ToDoItemsContext>


 }

 export default ToDoItemsContextProvider;