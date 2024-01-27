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
        const { name, isTrending, description, category, regular, medium, large } = req.body;

        const item = await Item.find({ name });

        console.log(item)

        if (item.length != 0) {
            return res.status(403).json({
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


        const newItem = await Item.create({ name, imgUrl: response.secure_url, img_public_id: response.public_id ,isTrending, description, category, price: { regular, medium, large } });

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