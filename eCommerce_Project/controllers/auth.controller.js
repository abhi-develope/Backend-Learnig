/**
 * logic to register a user
 */
const bcrypt = require("bcryptjs")
const user_model = require("../model/user.model")
const jwt = require("jsonwebtoken")
const secret = require("../configs/auth.config")



exports.signup = async (req, res)=>{
  /**
   * logic to create the user
   */

  //1. Read the request body
  const request_body = req.body

  //2. Insert the data in the users collection in MongoDB
  const userObj = {
    name : request_body.name,
    userId : request_body.userId,
    email : request_body.email,
    password : bcrypt.hashSync(request_body.password,8)
  }

  try {
    const user_created = await user_model.create(userObj)
    /**
     * return this user
     */
    
    const res_obj = {
      name : user_created.name,
      userId : user_created.userId,
      email : user_created.email,
      userType : user_created.userType,
      createdAt : user_created.createdAt,
      updatedAt : user_created.updateAt
    }

    res.status(201).send(res_obj)
  } catch (error) {
    console.log(error)
    res.status(500).send({
        message : "Some error happend while regitering the user"
    })

    
  }

  //3. Return the response back to the user
}


exports.signin = async (req, res)=>{

  //check if the user id is present in the system
  const user = await user_model.findOne({userId : req.body.userId})

  if(user == null){
    return res.status(400).send({
      message : "user id passed is not valid user id"
    })
  }

  //password is correct
  const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
  if(!isPasswordValid){
    return res.status(401).send({
      message : 'wrong password passed'
    })
  }

  //using just we will create the access token with a given and return
  const token = jwt.sign({id : user.userId}, secret.secret, {expiresIn : 120 })

  res.status(200).send({
    name : user.name,
    userId : user.userId,
    email : user.email,
    userType : user.userType,
    accessToken : token


  })

}