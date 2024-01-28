const Ingredients = require('../model/Ingredients')

exports.AddIngredients = async (req, res) => {
    try {
        const { name, quantity, price, category } = req.body;

        const item = await Ingredients.find({ name });

        if (item.length != 0) {
            return res.status(403).json({
                success: false,
                message: "Ingredient Item is already added!"
            })
        }

        await Ingredients.create({ name, quantity, price, category });

        return res.status(201).json({
            success: true,
            message: "Item Added!",
        })



    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Item is not Added!"
        })
    }
}