import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const UpdateUser = () => {
  let { id } = useParams();

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result.data);
        nameRef.current.value = result.data.Name;
        emailRef.current.value = result.data.Email;
        ageRef.current.value = result.data.Age;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const updateUser = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
        Name: nameRef.current.value,
        Email: emailRef.current.value,
        Age: ageRef.current.value,
      })
      .then((result) => {
        console.log(result.data);
        //  nameRef.current.value = "";
        //emailRef.current.value = "";
        //ageRef.current.value = "";
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" w-50 bg-white rounded p-3">
        <h2>Update User</h2>
        <form onSubmit={updateUser}>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter Name"
              class="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter Email"
              class="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              ref={ageRef}
              type="text"
              placeholder="Enter Age"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
