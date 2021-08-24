const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const adminSchema = new Schema({

    name :{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone:{
        type : Number,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    loginType:{
        type : String,
        required : true
    },
    section:{
        type : String,
        required : true
    },
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }


})
const admin =  mongoose.model("Admin",adminSchema);

module.exports = admin;