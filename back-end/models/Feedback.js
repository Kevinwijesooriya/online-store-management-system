const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    custom_ID : {
        type : String,
        required: true
    },
    custom_name : {
        type : String,
        required: true
    },
    item_name:{
        type : String,
        required: true
    },
    itemcode:{
        type : String,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    comment:{
        type:String,
        required: true
    },
    date_ob:{
        type:Date,
        required: true
    }

})

const feedback = mongoose.model("Feedback",feedbackSchema);

module.exports = feedback;