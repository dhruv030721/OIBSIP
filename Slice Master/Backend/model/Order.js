const mongoose = require('mongoose')


const Order = new mongoose.Schema({
    orderId : {
        type : String,
        required : true,
    },
    orderName: {
        type  : String,
        required : true,
    },
    orderItem : {
        type : String,
        required : true,
    },
    orderStatus : {
        type : String,
        required: true,
    },
    date: {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required: true,
    }
})

module.exports = mongoose.model("Order",Order);
