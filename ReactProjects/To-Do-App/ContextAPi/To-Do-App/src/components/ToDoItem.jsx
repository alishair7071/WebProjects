
function ToDoItem({toDoName, toDoDate, deleteItem}) {


  return <div className="container">

    <div className="row kg-row">
      <div className="col-6">{toDoName}</div>
      <div className="col-4">{toDoDate}</div>
      <div className="col-2">
        <button onClick={()=>{deleteItem(toDoName)}} className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
}

export default ToDoItem;