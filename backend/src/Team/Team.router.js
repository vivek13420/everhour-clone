const express = require("express");
const Project = require("../Project/Project.modal");

const app = express.Router();

app.get("/", async (req, res) => {
  const id = req.body.id;

  try {
    let projects = await Project.find({ projectAdmin: id }).populate('teamMembers');
    projects.forEach(x=> console.log(x.teamMembers));
    let arr = [];
    projects.forEach(x=> arr.push(...x.teamMembers));
    console.log(arr);
    res.status(200).send(arr);

    // console.log(projects);
    // res.send('hahah');

    // let allmembers = [];
    // projects.forEach(x=>  allmembers.push(...x.teamMembers)  );
    // allmembers.map(x => {x}).forEach(x=> x.populate);

    // res.status(200).send(allmembers);


  } catch (e) {
    res.status(401).send(e.message);
  }
});



module.exports= app;