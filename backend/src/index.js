const express = require("express")
const cors = require("cors")
const connect = require("./Components/Config/db");
const UserRouter=require("./Components/Users/User.Routes")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/users",UserRouter)

app.get("/", (req, res) => {
    res.send("WELCOME TO CONSTRUCT WEEK")
})

app.listen(8080, async() => {
    await connect();
    console.log("server started at http://localhost:8080");
})