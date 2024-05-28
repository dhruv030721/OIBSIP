const razorpay = require("razorpay")
require("dotenv").config();

exports.Payment = async (req, res) => {

    try {

        const { amount } = req.body;

        const instance = new razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const options = {
            amount: parseInt(amount * 100),
            currency: "INR",
            receipt: "receipt_order_10000",
            payment_capture: 1,
        }

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).json({ message: "Some error occured" })

        res.status(200).json({
            success: true,
            order
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "An Error Occured!"
        })
    }


}