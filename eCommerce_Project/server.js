/**
 * this will be the starting file of the project
 */

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")
const user_model = require("./model/user.model")
const bcrypt = require("bcryptjs")

app.use(express.json())

/**
 * Create an admin user at the starting of the application
 */

// connection with mongodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log('Error while connecting to the mongodb');
})

db.once("open", ()=>{
    console.log("connected to Mongodb");
    init();
})

async function init(){
    let user = await user_model.findOne({userId : "abmin"})
    try {
        if(user){
            console.log("Admin is already present");
            return
        }
        
    } catch (error) {
        console.log(err);
        
    }
   

    try{
        user = await user_model.create({
            name : "Abhishek",
            userId : "abmin",
            email : "aa@gmail.com",
            userType : "ADMIN",
            password : bcrypt.hashSync("welcom2",8)

        })
        console.log(user);
        
    }catch(err){
        console.log("Error While creating admin", err);
    }
}


/**
 * Stich the route to the server
 */

require("./routes/auth.routes")(app)




/**
 * start the server
 */
app.listen(server_config.port, ()=>{
    console.log("server started at port num :", server_config.port);
})