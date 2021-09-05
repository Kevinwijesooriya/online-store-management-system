const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    product_type : {
        type : String,
        required : true
    },
    brand_name : {
        type : String,
        required : true
    },
    model_number : {
        type : String,
        required : true
    },
    model_name : {
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
    no_of_items : {
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