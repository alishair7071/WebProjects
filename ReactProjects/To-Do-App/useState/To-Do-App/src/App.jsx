import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import ToDo from './components/ToDo'
import "./App.css"
import ToDoItemContainer from './components/ToDoItemContainer'
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'


function App() {

  let Items = [];
  const [ItemsCount, setItemsCount] = useState(Items);

  const handleNewItem = (Name, DueDate) => {
    console.log(`Name: ${Name}  Date:  ${DueDate}`);
    const newItemsCount = [...ItemsCount, {
      Name,
      DueDate
    }];
    setItemsCount(newItemsCount);
  }

  const deleteItem = (deletedItemName) => {
    let newItemsCount= ItemsCount.filter(item=> item.Name!=deletedItemName);
    setItemsCount(newItemsCount);
  }



  return <center classNameName="todo-container">
    <AppName></AppName>
    <ToDo handleNewItem={handleNewItem}></ToDo>
    <WelcomeMessage ItemsArgu={ItemsCount}></WelcomeMessage>
    <ToDoItemContainer deleteItem={deleteItem} ItemsArgu={ItemsCount}></ToDoItemContainer>
  </center>
}
export default App
