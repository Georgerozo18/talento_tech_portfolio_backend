const mongoose = require('mongoose')

const project_schema = new mongoose.Schema({
    applied_technologies:{
        type:String,
        required:true
    }, 
    functionalities:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
}, {
    collection:'projects_maded'
})

const project_model = mongoose.model('Project', project_schema)

module.exports = project_model