const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({mesage : "Unauthorized - No Token Provided."}); 
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message : "Unauthorized - Invalid Token."})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({message : "User Not Found."})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute Middleware : "+error.mesage);
        res.status(500).json({message : "Internal Server Error."});
    }
}

module.exports = {protectRoute};