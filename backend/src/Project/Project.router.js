const express = require("express");
const Project = require("./Project.modal");
const User = require("../Components/Users/Users.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const { id } = req.body;

  let projects = await Project.find();
  projects = projects.filter(x => {
    if (x.teamMembers) {
      if (x.teamMembers.includes(id)) return true;
    }
    if (x.projectAdmin == id) return true;
    else return false;
  });

  res.status(200).send(projects);
});

app.post("/", async (req, res) => {
  const {id} = req.headers;
  const user = await User.findById(id);
  if (user.role != "admin") req.status(400).send("User is not an admin");

  try {
    const newProject = await Project.create({
        ...req.body,
        projectAdmin: id
    });
    res.status(200).send(newProject);
  } catch (e) {
    res.status(400).send("Error");
    console.log(e);
  }
});
//projects/:id
app.delete('/:id', async (req, res)=>{
       const id = req.params.id;
   try{
        let afterDelete = await Project.findByIdAndDelete(id);
        res.status(200).send(afterDelete);
   }catch(e){
    console.log(e);
   }
} )


app.patch('/:id', async(req, res)=>{
    const id = req.params.id;
    try{
       
    }
    catch(e){
        req.status(400).send("error");
        console.log(e.message);
    }
})



module.exports = app;

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
