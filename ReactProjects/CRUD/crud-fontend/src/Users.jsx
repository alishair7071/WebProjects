import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([
    {
      Name: "Ali",
      Email: "ali@gmail.com",
      Age: "20",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const deleteUser= (id)=>{

    axios
    .delete("http://localhost:3001/deleteUser/"+id)
    .then((result) => {
      console.log(result.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });


  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" w-50 bg-white rounded p-3">
        <Link to="/create" type="button" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      type="button"
                      className="btn btn-success"
                    >
                      Update
                    </Link>

                    <button onClick={(e)=>deleteUser(user._id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
