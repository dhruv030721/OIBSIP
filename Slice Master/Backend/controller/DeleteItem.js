const Item = require('../model/MenuItem')

exports.DeleteItem = async (req, res) => {
    try {
        const _id = req.params.id;

        await Item.deleteOne(_id);

        return res.status(400)

    } catch (error) {
        
    }
}