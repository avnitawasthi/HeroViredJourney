const express = require("express");

const AuthRouter = express.Router();

const RegisterUser = require("../controllers/RegisterUser")
const LoginUser = require("../controllers/LoginUser")
const getUser = require("../controllers/getUsers")
const validator =require("../utils/Validator")
AuthRouter.post("/register",RegisterUser)
AuthRouter.post("/login", LoginUser)
AuthRouter.get("/user",validator,getUser)


AuthRouter.get("/login", (req, res) => {
    res.send("login")
})

module.exports = AuthRouter;