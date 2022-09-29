const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
 name: {type: string , required: true},
 



})


const Client  = mongoose.model('client' , clientSchema);


