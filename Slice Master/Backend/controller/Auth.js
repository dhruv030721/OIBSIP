const Users = require("../model/User");
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, mobileNumber } = req.body;

        const user = await Users.findOne({ email });

        if (user) {
            return res.status(500).json({
                success: true,
                message: "User is Already Exists",
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

        const createuser = await Users.create({
            name, email, password: hashpassword, mobileNumber
        })

        return res.json({
            success: true,
            message: "User created successfully"
        })


    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: "User Can not Resisted,please try again"
        });


    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the detail carefully"
            })
        }

        const users = await Users.findOne({ email });

        if (!users) {
            return res.status(401).json({
                success: false,
                message: "user is not registed"
            })
        }

        const payload = {
            email: users.email,
            id: users._id,
        }

        if (await bcrypt.compare(password, users.password)) {
            // password matched
            let token = jwt.sign(payload, process.env.JWT_SECRET,
                {
                    expiresIn: "2h",
                });
            users.token = token;
            users.password = undefined;


            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httponly: true,
            }

            res.cookie("Mit", token, options).status(200).json({
                success: true,
                token,
                users,
                message: "user Logged in successfully"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "password incorrect"
            })
        }



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Loggedin fail "
        });
    }
}