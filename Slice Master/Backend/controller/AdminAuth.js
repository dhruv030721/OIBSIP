const Users = require("../model/User");

exports.adminAuth = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the detail carefully"
            })
        }

        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User is not registered"
            })
        }

        if(user.role.toLowerCase() == 'user'){
            return res.status(401).json({
                success: false,
                message: "Authetication Failed"
            })   
        }

        res.status(200).json({
            success:true,
            message: "Login Successfully!",
            user
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message: "Login Failed!",
        })
    }
}