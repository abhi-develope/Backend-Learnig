const mongoose = require('mongoose')

// write code to connect with mongoDB

mongoose.connect("mongoose://127.0.0.1/be_demodb")

const db = mongoose.connection  // start the connection with mongo db

db.on("error", ()=>{
    console.log("Error while connecting to db");
});

db.once("open",()=>{
    console.log("connected to MongoDB");
})