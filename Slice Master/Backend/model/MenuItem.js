const mongoose = require('mongoose')

const MenuItem = new mongoose.Schema({
    name : {
        type: String, 
        required : true,
    },
    imgUrl : {
        type : String,
        required : true,
    },
    img_public_id:{
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true,
    },
    price: {
        regular : {
            type : Number,
            required : true
        },
        medium : {
            type : Number,
        },
        large : {
            type: Number,
        }
    },
    isTrending: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        required : true,
    }
})

module.exports = mongoose.model("Item",MenuItem);