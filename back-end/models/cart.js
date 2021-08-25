const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const onlinestoreSchema = new Schema({

    customerID : {
        type : String,
        required : true
    },
    productID : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
  
})

const OnlineStore = mongoose.model("OnlineStore", onlinestoreSchema);

module.exports = OnlineStore;