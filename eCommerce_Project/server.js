/**
 * this will be the starting file of the project
 */

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./configs/server.config")





/**
 * start the server
 */
app.listen(server_config.port, ()=>{
    console.log("server started at port num :", server_config.port);
})