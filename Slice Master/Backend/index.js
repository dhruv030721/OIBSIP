const express = require("express")
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect();

const dbconnect = require("./config/database")
dbconnect();

const route = require("./routes/route");
app.use("/api/v1", route);

app.listen(PORT, () => [
    console.log(`App is running on port No ${PORT}`)
])


