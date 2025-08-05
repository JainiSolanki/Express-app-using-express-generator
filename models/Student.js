var mongoose = require('mongoose');
//schema
var StudentSchema = mongoose.Schema({
    sname : String,
    smobile : Number,
    semail : String
})
//model
var StudentModel = mongoose.model('Student', StudentSchema)

module.exports = StudentModel
