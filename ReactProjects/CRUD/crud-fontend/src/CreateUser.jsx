import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        Name: nameRef.current.value,
        Email: emailRef.current.value,
        Age: ageRef.current.value,
      })
      .then((result) => {
        console.log(result.data);
        nameRef.current.value = "";
        emailRef.current.value = "";
        ageRef.current.value = "";
        navigate('/');

      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" w-50 bg-white rounded p-3">
        <h2>Add User</h2>
        <form onSubmit={submit}>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
