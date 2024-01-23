const Users = require("../model/User");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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

        if (user.role.toLowerCase() == 'user') {
            return res.status(401).json({
                success: false,
                message: "Authetication Failed"
            })
        }

        const payload = {
            user
        }

        if (await bcrypt.compare(password, user.password)) {
            // password matched
            let admintoken = jwt.sign(payload, process.env.JWT_SECRET,
                {
                    expiresIn: "2h",
                });
            user.admintoken = admintoken;
            user.password = undefined;


            const options = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
            }

            setTimeout(() => {
                res.cookie("admintoken", admintoken, options).status(200).json({
                    success: true,
                    admintoken,
                    user,
                    message: "Admin Logged in successfully!"
                })
            }, 1000);
        } else {
            return res.status(401).json({
                success: false,
                message: "Password Incorrect!"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Login Failed!",
        })
    }
}