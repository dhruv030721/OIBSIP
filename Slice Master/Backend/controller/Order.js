const Order = require("../model/Order")


exports.Order =  async (req, res) => {
    try {
        const {orderId, name, orderItem, amount, date, time } = req.body;

        const order = await Order.find({orderId});

        if(order.length != 0){
            return res.status(403).json({
                success : false,
                message : "Order Repeated;"
            })
        }

        await Order.create({orderId, Name: name, orderItem, amount, date, time})

        return res.status(200).json({
            success : true,
            message : "Successfully Ordered!"
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Order Failed, Money will be refunded within 2 days"
        })
    }
} 