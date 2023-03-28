const routes = require("express").Router();
const controllers = require("../controller/controller");

routes.post("/register", controllers.register)

module.exports = routes;