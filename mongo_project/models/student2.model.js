// Define the schema of students collection to be stored in the db

const mongoose = require('mongoose')

// creating schema

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 19
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 15
    },
    subjects : [String],
    createdAt : {
        type : Date,
        immutable : true,
        default : () => {
            return Date.now()
        }
    }
})


// create corresponding collection in db

module.exports = mongoose.model("student",studentSchema)