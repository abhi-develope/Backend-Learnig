const express = require("express");
const app = express();
const router = require("./router/auth-router")

app.use("/api/auth" , router)






// app.get("/", (req, res)=>{
//     res.status(200).send("Abhishek Prajapati")
// })

// app.get("/registration", (req, res)=>{
//     res.status(200).send("Kindly, register yourself to process furthur")
// })

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is started at port ${PORT}`);
})