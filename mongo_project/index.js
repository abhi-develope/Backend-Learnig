const mongoose = require('mongoose')

// const doctorModel = require("./models/doctor.model")
const studentModel = require("./models/student2.model")

// write code to connect with mongoDB

mongoose.connect("mongodb://localhost:27017/demodb")

const db = mongoose.connection  // start the connection with mongo db

db.once("open",()=>{
    console.log("connected to MongoDB");
    // Logic to insert data into the db
    init()

    // running queries

    // dbQueries();

})

db.on("error", ()=>{
    console.log("Error while connecting to db");
});


async function init(){
    // logic to insert data in the db
    const student2 = {
        name : "Suraj",
        age : 30,
        email :"prajapatiahishek320@gmail.com",
        subjects : ["English", "Maths"]

    }

    const std_obj = await studentModel.create(student2)

    console.log(std_obj);
}

// async function dbQueries(){
//     // Read the student data

//     // Read the student data based on id
//     try{
//         const student = await studentModel.findById("65eefe382ffd69e8c2faf8b4")
//         console.log(student);
//     }catch(err){
//         console.log(err);
//     }

//     // find data based on name
//     try{
//     const students = await studentModel.find({name : "Abhishek"})
//     console.log(students);

// }catch(err){
//     console.log(err);
// }

// // Deal with multiple conditions

// const stds = await studentModel.where("age").gt("10").where("name").equals("Abishek").limit(2)
// console.log(stds);


// // Delete document by there name 

// const student = await studentModel.deleteOne({name : "Abhishek"})
// console.log(student);

// }