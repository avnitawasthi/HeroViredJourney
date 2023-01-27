const UserModel = require("../models/USerSchema")
const jwt = require('jsonwebtoken');


function LoginUser(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;



    if (!email) {
        return res.json({login:false})
    }
    UserModel.findOne({ email }, (error, data) => {
        if (error) {
            return res.json({ login: false ,message:"invalid mailid"})
        }
        else {
            var accessToken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '20m' });
            res.json({token:accessToken,login :true})
        }
    })






}

module.exports = LoginUser;