const Item = require('../model/MenuItem')
const cloudinary = require('cloudinary').v2

// File type validation function
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}


// Function to upload file on Cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder, };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

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

exports.EditItem = async (req, res) => {
    try {
        const { name, isTrending, description, category, regular, medium, large } = req.body;

        const item = await Item.findOne({ name: name });

        if (item.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Item data not found!"
            })
        }

        const publicId = item.img_public_id;

        const deleteResponse = await deleteFileFromCloudinary(publicId);

        if (deleteResponse) {
            const { files } = req.files;

            const supportedTypes = ["jpg", "jpeg", "png"];
            const fileType = files.name.split(".")[1].toLowerCase();

            if (!isFileTypeSupported(fileType, supportedTypes)) {
                return res.status(400).json({
                    success: false,
                    message: "File format not supported!"
                })
            }

            const response = await uploadFileToCloudinary(files, "Practice");

            console.log(response)

            const filter = { name: name };
            const update = { name, isTrending, description, category, price: { regular, medium, large }, imgUrl: response.secure_url, img_public_id: response.public_id }

            const newItem = await Item.findOneAndUpdate(filter, update);

            return res.status(200).json({
                success: true,
                message: "Item Edited!"
            })

        } else {
            return res.status(400).json({
                success: false,
                message: "An error occured!"
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Item is not edited!"
        })
    }
}