const mongoose = require('mongoose')

const section_schema = new mongoose.Schema({
    title_section:{
        type:String,
        required:true
    }, 
    description_section:{
        type:String,
        required:true
    }
}, {
    collection:'sections'
})

const section_model = mongoose.model('Section', section_schema)

module.exports = section_model