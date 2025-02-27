import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import ToDo from './components/ToDo'
import "./App.css"
import ToDoItemContainer from './components/ToDoItemContainer'
import WelcomeMessage from './components/WelcomeMessage'
import ToDoItemsContextProvider from './store/todo_items_store'



function App() {


  return <ToDoItemsContextProvider>
    <center classNameName="todo-container">
      <AppName></AppName>
      <ToDo></ToDo>
      <WelcomeMessage></WelcomeMessage>
      <ToDoItemContainer></ToDoItemContainer>
    </center>
  </ToDoItemsContextProvider>

}
export default App
