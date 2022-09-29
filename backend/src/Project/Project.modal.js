const mongoose  = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: {type: String, required: true  },
    teamMembers: [{type: mongoose.Schema.Types.ObjectId, ref : 'user'}],
    isActive: {type: Boolean, default: true},
    hasBudget: {type: Boolean, default: true},
    projectAdmin: {type : mongoose.Schema.Types.ObjectId, ref: 'user'},
    
})



const Project = mongoose.model('project', projectSchema);


module.exports = Project;