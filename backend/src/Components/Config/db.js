const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://Alisha:alisha@cluster0.rdqgffl.mongodb.net/Everhour")
        // .then((res) => console.log("success"))
        // .catch((e)=>console.log(e))
        ;
};

module.exports = connect;
