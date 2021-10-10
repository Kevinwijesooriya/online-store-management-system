const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    itemname: {
        type: String,
        required: true
    },

    itemimage: {
        type: String,
        required: true
    },

    itemcategory: {
        type: String,
        required: true
    },


    itembrand: {
        type: String,
        required: true
    },

    itemcolor: {
        type: String,
        required: true
    },

    itemprice: {
        type: Number,
        required: true
    },

    itemqty: {
        type: Number,
        required: true
    },

    itemdescription: {
        type: String,
        required: true
    },

    date_ob:{
        type:Date,
        required: true
    }


})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;