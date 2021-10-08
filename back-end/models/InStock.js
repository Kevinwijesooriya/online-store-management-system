const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InStockSchema = new Schema({

    product_name: {
        type: String,
        required: true
    },
    model_number: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const InStock = mongoose.model("InStock", InStockSchema);

module.exports = InStock;