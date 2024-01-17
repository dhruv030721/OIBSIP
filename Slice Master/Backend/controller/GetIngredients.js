const Ingredients = require("../model/Ingredients")

exports.GetIngredients = async (req, res) => {
    try {

        const ingredients = await Ingredients.find();

        if (ingredients.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Data Not Found"
            })
        }

        setTimeout(() => {
            return res.status(200).json({
                success: true,
                message: "Data fetched Successfully",
                ingredients
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