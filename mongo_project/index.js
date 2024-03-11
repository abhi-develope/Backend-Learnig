const mongoose = require('mongoose')
// const studentModel = require("./models/student.model")
const studentModel = require("./models/student2.model")

// write code to connect with mongoDB

mongoose.connect("mongodb://localhost:27017/demodb")

const db = mongoose.connection  // start the connection with mongo db

db.on("error", ()=>{
    console.log("Error while connecting to db");
});

db.once("open",()=>{
    console.log("connected to MongoDB");
    // Logic to insert data into the db
    init()
})

async function init(){
    // logic to insert data in the db
    const student = {
        name : "Abhishek",
        age : 20,
        email :"prajapatiahishek320@gmail.com",
        subjects : ["English", "Maths"]

    }

    const std_obj = await studentModel.create(student)

    console.log(std_obj);
}