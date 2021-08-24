const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new  Schema({

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
   username:{
       type : String,
       required : true
   },
   password:{
       type : String,
       required : true
   }

})

const customer = mongoose.model("Customer",customerSchema);

module.exports = customer; 
