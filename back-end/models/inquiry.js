const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({

    custom_ID : {
        type : String,
        required: true
    },
    custom_name:{
        type : String,
        required: true
    },
    custom_address_code:{
        type: Number,
        required: true
     },
    custom_streat_address:{
        type : String,
        required: true
    },
    custom_city:{
        type : String,
        required: true
    },
    custom_province_name:{
        type : String,
        required: true
    },
    custom_mail:{
        type : String,
        required: true
    },
    custom_contact_number:{
        type: Number,
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
    billnumber:{
        type : String,
        required: true
    },
    type_of_inquiry:{
        type:String,
        required: true
    },
    inquriy_description:{
        type:String,
        required: true
    },
    date_ob:{
        type:Date,
        required: true
    }

})

const inquiry = mongoose.model("Inquiry",inquirySchema);

module.exports = inquiry;