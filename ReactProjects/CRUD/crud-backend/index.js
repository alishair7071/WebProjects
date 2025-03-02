const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/userModel");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create", async (req, res) => {
  let { Name, Email, Age } = req.body;
  console.log(Name);
  let user = await userModel.create({
    Name: Name,
    Email: Email,
    Age: Age,
  });
  res.send(user);
  console.log(user);
});

app.get("/", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/getUser/:id", async (req, res) => {
  const id = req.params.id;
  let user = await userModel.findById(id);
  res.send(user);
});

app.put("/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  let { Name, Email, Age } = req.body;
  let user = await userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        Name: Name,
        Email: Email,
        Age: Age,
      }
    )
    .then((resp) => {
      res.send("successfully updated");
    }).catch(err=>res.send(err));
});

app.delete("/deleteUser/:id", (req, res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id: id})
    .then(resp=>res.send("deleted successfully"))
    .catch(err=>res.send(err));

});

app.listen(3001, () => {
  console.log("Server is running");
});
