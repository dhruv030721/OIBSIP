const UserQuery = require('../model/UserQuery')
const mailSender = require('../config/mailSender')

exports.ContactUs = async (req, res) => {
    try {

        const { name, email, message } = req.body;

        console.log(name)

        const response = await mailSender(
            email,
            'Slice Master - Dhruv Godhani <dhruvgodhani07@gmail.com>',
            'Customer Query',
            `<h3>Name : ${name}</h3>
            <h3>email : ${email}</h3>
            <h3>message : ${message}</h3>`)

        if(response){
            await UserQuery.create({name,email,message});

            return res.status(200).json({
                success : true,
                message : "Message sent!"
            })
        } else {
            return res.status(400).json({
                success : true,
                message : "An error occured!"
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Message not sent!"
        })
    }
}