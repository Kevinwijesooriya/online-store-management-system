const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({

    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    street : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    customerID : {
        type: String,
        required: true
    },
    postal_code : {
        type: Number,
        required: true
    },
    date_ob : {
        type: Date,
        required: true
    }

})

const Delivery = mongoose.model("Delivery",deliverySchema);

module.exports = Delivery;