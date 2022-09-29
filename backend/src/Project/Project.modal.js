const mongoose  = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: {type: String, required: true  },
    members: {type: mongoose.Schema.Types.ObjectId, ref : 'uers'},
    isActive: {type: Boolean, default: true},
    hasBudget: {type: Boolean, default: true},


})


const Project = mongoose.model('project', projectSchema);


module.exports = Project;