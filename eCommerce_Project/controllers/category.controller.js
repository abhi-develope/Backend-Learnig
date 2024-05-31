const category_model = require("../model/category.model")


/**
 * controller for creating the category
 * 
 * POST localhost:8080/ecomm/api/v1/categories
 * 
 * {
 *   "name" : "household"
 *   "description" : "This is the description"
 * }
 */

exports.createNewCategory = async (req, res)=>{

    //Read the req body

    //Create the category object
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }

    //Insert into mongodb
    try {
        const category = await category_model.create(cat_data)
        return res.status(201).send(category)
        
    } catch (error) {
        console.log(error);
       return res.status(500).send({
            message : "Error while creating the category"
        })
    }
    

    //return the response of the created category
}