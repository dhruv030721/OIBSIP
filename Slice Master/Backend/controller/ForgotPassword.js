const User = require('../model/User')
const OTP = require('../model/OTP')
const bcrypt = require('bcrypt')
const otpGenerator = require('otp-generator')


exports.ForgotPassword = async (req, res) => {

    try {

        const { email } = req.body;

        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found!"
            })
        }

        let otp;

        try {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            let result = await OTP.findOne({ otp: otp });
            while (result) {
                otp = otpGenerator.generate(6, {
                    upperCaseAlphabets: false,
                });
                result = await OTP.findOne({ otp: otp });
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "OTP in not generated!"
            })
        }

        await OTP.create({ email, otp });

        return res.status(200).json({
            success: true,
            message: "Mail Sent!"
        })


    } catch (error) {
        console.log(error)
    }

}

exports.otpVerification = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

        if(response.length == 0 || otp !== response[0].otp){
            return res.status(400).json({
                success: false,
                message : "Invalid OTP!"
            })
        }

        return res.status(200).json({
            success : true,
            message : "OTP Verified!"
        })



    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success : false,
            message : "Validation Failed"
        })
    }
}



exports.updatePassword = async (req, res) => {

    try {

        const { email, password } = req.body;

        let hashPassword;

        try {
            hashPassword = await bcrypt.hash(password, 10)
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Error on password hashing!"
            })
        }

        const user = await User.findOneAndUpdate({ email: email }, { password: hashPassword })

        return res.status(200).json({
            success: true,
            message: "Password Changes Successfully!"
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Password not changed!"
        })
    }

}