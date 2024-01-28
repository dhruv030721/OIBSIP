const mongoose = require('mongoose')


const Order = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    orderItem: [
        {
            item_name: {
                type: String,
                required: true,
            },
            item_quantity: {
                type: String,
                required: true,
            },
            item_ingredients: [
                {
                    type:String
                }
            ]
        }
    ],
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default : "Pending"
    }
})

module.exports = mongoose.model("Order", Order);
