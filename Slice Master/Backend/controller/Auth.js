const Users = require("../model/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, contactNumber, role } = req.body;

        const user = await Users.findOne({ email });

        if (user) {
            return res.status(500).json({
                success: true,
                message: "User is Already Exists!",
            })
        }

        let hashpassword;
        try {
            hashpassword = await bcrypt.hash(password, 10)
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Error on password hashing",
            })
        }

        const NewUser = await Users.create({
            name, email, password: hashpassword, contactNumber, role
        })

        return res.status(200).json({
            success: true,
            message: "User created successfully!",
        })


    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "User Can not Registerd, Please try again!"
        });


    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the detail carefully!"
            })
        }

        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered!"
            })
        }

        const payload = {
            userdata: user
        }

        if (await bcrypt.compare(password, user.password)) {
            // password matched
            let token = jwt.sign(payload, process.env.JWT_SECRET,
                {
                    expiresIn: "2h",
                });
            user.token = token;
            user.password = undefined;


            const options = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
            }

            setTimeout(() => {
                return res.cookie("slice_token", token, options).status(200).json({
                    success: true,
                    token,
                    user,
                    message: "User Logged in successfully!"
                })
            }, 1000);
        } else {
            return res.status(401).json({
                success: false,
                message: "Password Incorrect!"
            })
        }



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login Failed!"
        });
    }
}