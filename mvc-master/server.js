
require('.env').config();
const express = require("express")
const mongoose = require('mongoose');


const app = express();
app.use(express.json())




mongoose.connect('mongodb+srv://root:cQDTIayzOHiqPDGO@cluster0.hr8uxum.mongodb.net/test')
  .then(() => console.log('Connected!'));




const SignupRouter = require("./routes/AuthRoute")



app.use("/auth",SignupRouter);


app.listen("5000", () => {
    console.log("server is runing");
})