

const user_model = require("../model/user.model")
const jwt = require("jsonwebtoken")
const auth_config = require("../configs/auth.config")
/**
 * create a mw will check if the request body is proper and correct
 */

const verifySignUpBody = async(req, res, next)=>{

    try {
        //check for the name 
        if(!req.body.name){
            return res.status(400).send({
                message : "Failed ! Name was not provied in request body"
            })
        }

        //check for the email
        if(!req.body.email){
            return res.status(400).send({
                message : "Failed ! Email was not provied in request body"
            })
        }


        //check for the userId
        if(!req.body.userId){
            return res.status(400).send({
                message : "Failed ! userid\\ was not provied in request body"
            })
        }


        //check if the user with the same userId is already present
        const user = await user_model.findOne({userId : req.body.userId})

        if(user){
        return res.status(400).send({
            message : "Failed ! user with same jserid is already present"
        })
        }

        next()
        
    } catch (error) {
        console.log("Error while validating the request object", error);
        res.status(500).send({
            message: "Error while validating the request body "
        })
        
    }
}

const verifySignInBody = async(req, res, next)=>{

    if(!req.body.userId){
        return res.status(400).send({
            message : "userId is not provided"
        })
    }

    if(!req.body.password){
        return res.status(400).send({
            message : "password is not provided"
        })
    }
    next()

}

const verifyToken = (req, res, next)=>{
    //Check if the token is present in the header
    const token = req.headers['x-access-token']

    if(!token){
        return res.status(403).send({
            message : "no token found : unauthorized"
        })
    }

    //If it's the valid token
    jwt.verify(token, auth_config.secret, async (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message : "Unauthorized"
            })
        }
        const user = await user_model.findOne({userId : decoded.id})
        if(!user){
            return res.status(400).send({
                message : "unathurize, this user for this token doesn't exist"
            })
        }
        next()
    } )

    //Then move to the next step
}



module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySignInBody : verifySignInBody,
    verifyToken : verifyToken
}