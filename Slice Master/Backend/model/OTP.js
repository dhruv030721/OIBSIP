const mongoose = require("mongoose")
const mailSender = require('../config/mailSender')

const OTP = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    otp : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires : 60*2
    }
})

OTP.post("save", async function(doc){
    try{
        
        const mailResponse = await mailSender(
            doc.email,
            "OTP Verification to change password!",
            `<h1>Your OTP is : ${doc.otp}</h1>`
        )

        console.log(mailResponse);

    } catch(error){
        console.log(error);
    }
})



module.exports = mongoose.model("OTP", OTP); 