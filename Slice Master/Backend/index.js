const express = require("express")
const http = require('http')
const { initializeSocket } = require('./config/socket')
const app = express();
const server = http.createServer(app)
const cors = require("cors")
initializeSocket(server)

require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect();

const dbconnect = require("./config/database")
dbconnect();

const route = require("./routes/route");
app.use("/api/v1", route);

server.listen(PORT, () => [
    console.log(`App is running on port no : ${PORT}`)
])


