const Order = require('../model/Order')


exports.GetOrder = async (req, res) => {
    try {

        const orders = await Order.find();

        if (orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found"
            })
        }

        setTimeout(() => {
            return res.status(200).json({
                success: true,
                message: "Data fetched Successfully",
                orders
            })
        }, 2000);

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error occuring in fecthing data!"
        })
    }
}