const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courierSchema = new Schema({

    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    e_mail : {
        type: String,
        required: true
    },
    contact_no : {
        type: Number,
        required: true
    },
    date_ob : {
        type: Date,
        required: true
    }

})

const Courier = mongoose.model("Courier",courierSchema);

module.exports = Courier;