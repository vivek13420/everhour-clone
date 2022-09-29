const express = require("express");
const Project = require("./Project.modal");
const User = require("../Components/Users/Users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const id = req.body;
  
  const projects = await Project.find();
  projects.filter(x=> x.teamMembers.includues(id));


  res.status(200).send(projects);


});

app.post("/", async (req, res) => {
  const id = req.headers;
        const user = await User.findById(id);
        if(user.role != 'admin') req.status(400).send("User is not an admin");

  try {
    const newProject = await Project.create(req.body);
    res.status(200).send(newProject);
  } catch (e) {
    res.status(400).send('Error');
    console.log(e);
  }
});



















// const authMiddleware = async(req, res, next) => {
//     const token = req.headers.token;
//     if (token) {
//       try {
//           let [id, email, password] = token.split(':');
//           const user = await User.findById(id);
//           if(user.email==email && user.password==password){
//               next();
//           }
//           else{
//               res.status(401).send("Missing Permission");
//           }
//       } catch {}
//     } else {
//       return res.status(401).send("user not found");
//     }
//   };

//   app.get("/", async (req, res) => {
//     const users = await User.find({}, { password: 0 });
//     return res.send(users);
//   });

//   app.post("/", async (req, res) => {
//     try {
//       const createdUser = await User.create(req.body);
//       return res.send(createdUser);
//     } catch (e) {
//       console.log(e.message);
//       console.log("haha");
//     }
//   });

//   app.use(authMiddleware);

//   app.get("/:id", async (req, res) => {
//       let {id} = req.params;
//       const user = await User.findById(id);
//       return res.send(user);
//   });

//   app.delete("/:id", async (req, res) => {
//       let {id} = req.params;
//       await User.deleteOne({_id: id});
//       res.send("successful")
//   });

//   module.exports = app;
