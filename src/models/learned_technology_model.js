const mongoose = require('mongoose')

const technology_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    icon:{
        type:String,
        required:true
    }
}, {
    collection:'learned_technologies'
})

const technology_model = mongoose.model('Technology', technology_schema)

module.exports = technology_model