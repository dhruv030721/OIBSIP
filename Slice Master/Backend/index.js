const express = require("express")
const http = require('http')
const { initializeSocket } = require('./config/socket')
const app = express();
const server = http.createServer(app)
const cors = require("cors")
initializeSocket(server)
const morgan = require('morgan');


require('dotenv').config();
const PORT = process.env.PORT || 4000

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,  
  };

app.use(cors(corsOptions))
app.use(express.json());    
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


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


