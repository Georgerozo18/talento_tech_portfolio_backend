const mongoose = require('mongoose')

const job_schema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    }, 
    achievement:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    }, 
    end_date:{
        type:Date,
        required:true
    }
}, {
    collection:'job_experience'
})

const job_model = mongoose.model('Job', job_schema)

module.exports = job_model