const Item = require("../model/MenuItem")

exports.GetItem = async (req, res) => {
    try {

        const items = await Item.find();

        if (items.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Data fetched Successfully",
            items
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error occuring in fecthing data!"
        })
    }



}