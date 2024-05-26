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