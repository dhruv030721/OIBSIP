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

    // options.resource_type = "auto";

    // Add Cloudinary background removal settings
    // options.background_removal = "cloudinary_ai";

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}



exports.AddItem = async (req, res) => {
    try {
        const { name, price, isTrending, description, category } = req.body;

        const item = await Item.findOne({ name });

        if (item) {
            res.status(403).json({
                success: false,
                message: "Item already exists!"
            })
        }

        const { files } = req.files;
        console.log(files);

        // Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = files.name.split(".")[1].toLowerCase();

        // If file is not supported
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported!'
            })
        }


        // If file is supported
        const response = await uploadFileToCloudinary(files, "Practice");
        console.log(response);


        const newItem = await Item.create({ name, imgUrl: response.secure_url, price, isTrending, description, category });

        return res.status(200).json({
            success: true,
            message: "Item Added!",
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Item is not added!"
        })
    }
}  