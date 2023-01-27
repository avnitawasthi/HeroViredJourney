const UserModel = require("../models/USerSchema")
function getUser(req, res, next) {
    let email = req.body.email;
   



    if (!email) {
        return res.json({login:false})
    }
    UserModel.findOne({ email }, (error, data) => {
        if (error) {
            return res.json({ login: false ,message:"invalid mailid"})
        }
        else {
            
            res.json({userdata :data})
        }
    })






}
module.exports =getUser