const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    
    product_name : {
        type : String,
        required : true
    },
    model_number : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    specifications : {
        type : String,
        required : true
    },
    supplier : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
   


})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;