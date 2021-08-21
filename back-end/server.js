const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

require("dotenv").config();
const app = express();

//const PORT = process.env.PORT || 8070;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const URL = process.env.MONGOBD_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})

const connction = mongoose.connection;
connction.once("open", () =>{
    console.log("Mongodb Connection success");
})
app.listen(PORT, () => {
    console.log('Server running on port : ${PORT}');
})

const personRouter= require("./routes/persons");
app.use("/person",personRouter);


