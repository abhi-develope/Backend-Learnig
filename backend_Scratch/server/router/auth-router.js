// express routers

const express = require("express");
const router = express.Router(); 
const {home} = require("../controllers/auth-controller")

// method:-1

// router.get('/', (req, res) =>{
//     res.status(200).send("abhishek from router")
// });


// method:-2

// router.route("/").get( (req, res) =>{
//     res.status(200).send("abhishek from router method2")
// });



// router.route("/register").get((req,res) => {
//     res.status(200).send("abhishek registration page method2")
// })

router.route("/").get(home);

module.exports = router;