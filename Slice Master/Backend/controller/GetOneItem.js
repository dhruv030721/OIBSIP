const Item = require("../model/MenuItem")
const cloudinary = require("cloudinary").v2

exports.GetOneItem = async (req, res) => {
    try {

        const _id = req.params.id;

        // const objectId = new mongoose.Types.ObjectId(_id);

        const item = await Item.findById(_id);

        if (item.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found"
            })
        }

        setTimeout(() => {
            return res.status(200).json({
                success: true,
                message: "Data fetched Successfully",
                item
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