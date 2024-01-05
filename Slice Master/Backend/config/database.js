const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = (req, res) => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database is connect successfully")
    }).catch((error)=>{
        console.log("error generated");
        console.log(error.message);
    })
}
module.exports=dbconnect;