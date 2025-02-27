import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import ToDo from './components/ToDo'
import "./App.css"
import ToDoItemContainer from './components/ToDoItemContainer'
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import { ToDoItemsContext } from './store/todo_items_store'


function App() {

  let Items = [];
  const [ItemsCount, setItemsCount] = useState(Items);

  const addNewItem = (Name, DueDate) => {
    console.log(`Name: ${Name}  Date:  ${DueDate}`);
    const newItemsCount = [...ItemsCount, {
      Name,
      DueDate
    }];
    setItemsCount(newItemsCount);
  }

  const deleteItem = (deletedItemName) => {
    let newItemsCount = ItemsCount.filter(item => item.Name != deletedItemName);
    setItemsCount(newItemsCount);
  }



  return <ToDoItemsContext value={
    {
      ItemsCount: ItemsCount,
      addNewItem: addNewItem,
      deleteItem: deleteItem
    }}>
    <center classNameName="todo-container">
      <AppName></AppName>
      <ToDo></ToDo>
      <WelcomeMessage></WelcomeMessage>
      <ToDoItemContainer></ToDoItemContainer>
    </center>
  </ToDoItemsContext>

}
export default App;
