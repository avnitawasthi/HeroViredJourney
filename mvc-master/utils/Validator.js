const jwt = require('jsonwebtoken');
const validator = (req, res, next) => {

    const { authorization } = req.headers
    console.log(authorization, "from headerssss");
    let authToken = authorization.split(" ")[1];


    const decoded = jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN)
    console.log(decoded, "-----------------------------------from decoded auth")

    if (decoded) {

        return next();
    }

    return res.status(403).json({ message: "Forbidden" })


}


module.exports = validator;
