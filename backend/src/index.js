const express = require("express")
const cors = require("cors")
const connect = require("./Components/Config/db");
const UserRouter = require("./Components/Users/User.Routes")
const ProjectRouter=require("./Project/Project.router")
const ClientRouter=require("./Client/Clients.router")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",UserRouter)
app.use("/projects", ProjectRouter)
app.use("/clients", ClientRouter);

app.get("/", (req, res) => {
    res.send("WELCOME TO CONSTRUCT WEEK")
})

app.listen(8080, async() => {
    await connect();
    console.log("server started at http://localhost:8080");
})