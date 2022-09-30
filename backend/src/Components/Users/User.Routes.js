const express = require("express");
const User = require("./Users.model");
const app = express.Router();



const authMiddleware = async (req, res, next) =>{
   let {token} = req.headers;
   console.log(token);
  //  res.send(typeof token);
  if(!token) res.status(401).send("no token provided");
   const [id, email, password, role] = token.split(":");
   if(!id || !email || !password || !role){
    res.status(401).send("User not allowed to access Because of lack of authentication");
   }
   try{
    console.log('hahaha');
    let user = await User.findById(id);
    console.log(user);
    if(user.email==email && user.password==password){
      next();
    }
    else res.status(401).send("No authentication");
   }catch(e){
    res.status(400).send(e.message);
   }
}




app.get("/", async (req, res) => {
  
  let {r}  = req.query;
  // console.log('ahahahah');
  try {
    if (r) {
      let b = await User.find({ role: r }, {password: 0});
      console.log(b);
      res.send(b);
    }
  } catch (e) {
    res.status(401).send(e.message);
  }  
  let a = await User.find({}, {password: 0});

  res.send(a);
});






app.get('/:id', authMiddleware, async (req, res)=>{
   let id = req.params.id;
   try{
    let profile = await User.findById(id);
    res.status(200).send(profile); 
   }
   catch(e){
    res.status(401).send(e.message);

   }
})







app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send("Authentication failed");
    }

    res.send({
      token: `${user.id}:${user.email}:${user.password}:${user.role}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});



app.post("/signup", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create a user with existing email address, trying logging in using this email address"
        );
    }
    let createdUser = await User.create(req.body);
    res.send({
      token: `${createdUser.id}:${createdUser.email}:${createdUser.password}:${createdUser.role}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//token
// userid
//http://localhost:8080/users/id

app.patch('/:id', authMiddleware ,   async (req, res)=>{
        
        let token = req.headers.token

        let [id, email, password, role] = token.split(':');
     try{
      let  id = req.params.id;
      let updatedProfile = await  User.findByIdAndUpdate(id, req.body, {new : true});
      const newtoken = `${id}:${email}:${req.body.password}:${role}`;
      res.status(200).send(newtoken);
     }
     catch(e){
      res.status(401).send(e.message);
     }

})


module.exports = app;
