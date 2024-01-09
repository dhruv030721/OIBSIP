const jwt = require("jsonwebtoken");
require("dotenv").config();

// For Token Auth
exports.auth = (req,res,next) => {
    try{

        console.log("Cookie Token : ",req.cookies.AuthToken)
        console.log("Body Token : ",req.body.token)
        // console.log("Header Token : ",req.header("Authorization").replace("Bearer",""))

        // Extract JWT Token
        const token = req.body.token || req.cookies.AuthToken || req.header("Authorization").replace("Bearer ", "");
        if(!token){
            return res.status(404).json({
                success : false,
                message : "Token Not Found",
            })
        }

        // Verify the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            
            // Add role in request
            req.user = decode;

        }catch(error){
            return res.status(401).json({
                success : false,
                message : "Token is invalid",
            })
        }
        next();

    }catch(error){
        return res.status(401).json({
            success : false,
            message : "Something went wrong, while verifying the token",
        })
    }
}

// For Admin Auth
exports.isAdmin = async (req,res,next) => {
    try{
        if(req.user.role != 'Admin'){
            return res.status(401).json({   
                success : false,
                message : "This is a protected route for Admin",
            })
        }
        next();
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "User role is not matching",
        })
    }
}
