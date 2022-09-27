const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("WELCOME TO CONSTRUCT WEEK")
})

app.listen(8080, () => {
    console.log("server started at http://localhost:8080");
})