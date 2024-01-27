const Item = require('../model/MenuItem')
const cloudinary = require('cloudinary').v2

async function deleteFileFromCloudinary(publicId) {
    const response = cloudinary.uploader.destroy(publicId, function (error, result) {
        if (error) {
            console.error(error);
            return false;
        } else {
            // console.log(result);
            return true;
        }
    });

    return response;
}


exports.DeleteItem = async (req, res) => {
    try {
        const id = req.params.id;

        const item = await Item.findById(id);

        if (item.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Item data not found",
            })
        }

        const ImgDeleteResponse = await deleteFileFromCloudinary(item.img_public_id)

        if (ImgDeleteResponse) {

            await Item.deleteOne({_id : id});

            return res.status(200).json({
                success: true,
                message: "Item Successfully Removed!"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Item Not Removed!"
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "An Error Occured!"
        })
    }
}