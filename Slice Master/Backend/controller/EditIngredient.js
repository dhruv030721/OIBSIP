const Ingredient = require('../model/Ingredients')

exports.EditIngredient = async (req, res) => {
    try {

        const { id, quantity } = req.body;

        const ingredient = await Ingredient.findById(id);

        if (!ingredient) {
            return res.status(404).json({
                success: false,
                message: "Ingredient not found!"
            })
        }

        await Ingredient.findByIdAndUpdate(id, { quantity: quantity });

        return res.status(200).json({
            success: true,
            message: "Ingredient updated!"
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Item is not updated!"
        })
    }
}