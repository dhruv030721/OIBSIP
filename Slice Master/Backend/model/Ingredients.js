const mongoose = require('mongoose')

const Ingredients = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    quantity: {
        type : Number,
        required: true,
    },
    category : {
        type : String,
        required : true,
    },
    price  : {
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model("Ingredients",Ingredients);