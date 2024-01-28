const Order = require('../model/Order')

exports.ChangeOrderStatus = async (req, res) => {
    try {
        const { id, status } = req.body;

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found!"
            })
        }

        await Order.findByIdAndUpdate(id, { status: status })

        return res.status(200).json({
            success: true,
            message: "Status Updated!"
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Status not updated!"
        })
    }
}