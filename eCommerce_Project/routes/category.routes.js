/** 
 * POST localhost:8080/ecomm/api/v1/categories
 */

 category_controller = require("../controllers/category.controller")
 auth_mw = require("../middleware/auth.mw")

module.exports = (app) => {
    app.post("/ecomm/api/v1/categories", [auth_mw.verifyToken] ,category_controller.createNewCategory)
}