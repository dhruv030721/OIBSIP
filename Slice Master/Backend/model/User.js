const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "User"
    },
    address: {
        type : String
    }
})


module.exports = mongoose.model("Users", userSchema);