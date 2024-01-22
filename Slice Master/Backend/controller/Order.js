const Order = require("../model/Order")
const Ingredients = require("../model/Ingredients")


exports.Order = async (req, res) => {
    try {
        const { orderId, name, orderItem, amount, date, time } = req.body;

        const order = await Order.find({ orderId });

        if (order.length != 0) {
            return res.status(403).json({
                success: false,
                message: "Order Repeated;"
            })
        }

        
        const ingredients = orderItem.map((item) => {
            return { crust: item.item_ingredients[0], topping: item.item_ingredients[1] }
        })
        

        async function processIngredients() {
            for (const element of ingredients) {
                let crust = await Ingredients.findOne({ name: element.crust });
                let topping = await Ingredients.findOne({ name: element.topping });

                if(crust == null){
                    continue
                }

                let crustquantity = crust.quantity;
                let toppingquantity = topping.quantity;

                await Ingredients.findOneAndUpdate({ name: crust.name }, { quantity: crustquantity - 1 });
                await Ingredients.findOneAndUpdate({ name: topping.name }, { quantity: toppingquantity - 1 });
            }
        }

        processIngredients();
        
        await Order.create({ orderId, Name: name, orderItem, amount, date, time })


        return res.status(200).json({
            success: true,
            message: "Successfully Ordered!"
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Order Failed, Money will be refunded within 2 days"
        })
    }
} 