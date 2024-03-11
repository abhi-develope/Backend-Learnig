// Define the schema of students collection to be stored in the db

const mongoose = require('mongoose')

// creating schema

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})


// create corresponding collection in db

module.exports = mongoose.model("student",studentSchema)