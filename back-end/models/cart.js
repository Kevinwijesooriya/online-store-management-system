const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({

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

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;