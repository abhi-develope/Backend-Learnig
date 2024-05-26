/**
 * logic to register a user
 */
const bcrypt = require("bcryptjs")
const user_model = require("../model/user.model")



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
    password : bcrypt.hashsSync(request_body.password,8)
  }

  try {
    const user_created = await user_model.create(userObj)
    /**
     * return this user
     */
    res.status(201).send(user_created)
  } catch (error) {
    console.log(error)
    res.status(500).send({
        message : "Some error happend while regitering the user"
    })

    
  }

  //3. Return the response back to the user
}