const mongoose = require('mongoose')

const social_schema = new mongoose.Schema({
    social_name:{
        type:String,
        required:true
    }, 
    social_url:{
        type:String,
        required:true
    }
}, {
    collection:'social_media'
})

const social_model = mongoose.model('Social', social_schema)

module.exports = social_model