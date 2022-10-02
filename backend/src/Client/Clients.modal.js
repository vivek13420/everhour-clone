const mongoose = require('mongoose');
const Project = require('../Project/Project.modal');


const clientSchema = new mongoose.Schema({
 name: {type: String , required: true},
 budget: {type: Boolean, default: true},
 isActive: {type:Boolean, default:true},
 project: [{type:mongoose.Schema.Types.ObjectId, ref : 'project'}]
})


const Client  = mongoose.model('client' , clientSchema);


module.exports = Client;    