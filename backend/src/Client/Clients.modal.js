const mongoose = require('mongoose');
const Project = require('../Project/Project.modal');


const clientSchema = new mongoose.Schema({
 name: {type: string , required: true},
 bill: {type: number},
 project: {type:mongoose.Schema.Types.ObjectId, ref : 'project'}
})


const Client  = mongoose.model('client' , clientSchema);


module.exports = Client;    