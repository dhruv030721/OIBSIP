const express = require("express")
const app=express();    

require('dotenv').config();
const PORT = process.env.PORT || 4000

app.use(express.json());

app.listen(PORT,()=>[
    console.log(`App is running on port No ${PORT}`)
])

const route=require("./routes/route");
app.use("/api/v1",route);

const dbconnect=require("./config/database")
dbconnect();


